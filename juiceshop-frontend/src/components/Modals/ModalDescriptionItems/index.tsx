import { Container } from './style';
import { useCallback, useMemo, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { TableDetails } from './components/TableDetails';
import * as Yup from 'yup';
import {
  Control,
  Form,
  SubmitHandler,
  UseFormGetValues,
  UseFormSetValue,
  useForm,
} from 'react-hook-form';
import { ScheduleDetails } from './components/ScheduleDetails';
import { Juice } from '../../../types';
import { yupResolver } from '@hookform/resolvers/yup';
import { FinishedSteps } from './components/FinishedSteps';
import { JuiceRequestDTO, createOrder } from '../../../services/createOrder';

type FormProps = {
  juices: JuiceRequestDTO[];
  addressMachine: number;
  pickupDate: string;
  total: string;
};

export interface ComponentProps {
  next: () => void;
  back: () => void;
  control: Control<any, any>;
  validateSchema: () => void;
  setValue: UseFormSetValue<FormProps>;
  getValues: UseFormGetValues<FormProps>;
  errors: {
    [key: string]: any | undefined;
  };
  disabled: boolean;
}

interface StepProps {
  key: string;
  component: React.FC<ComponentProps>;
  schema: Yup.ObjectSchema<any>;
}

export function ModalDescriptionItems() {
  const [selected, setSelected] = useState(0);
  const [disabled, setDisabled] = useState(true);

  const validationSchema = Yup.object().shape({
    juices: Yup.array().of(
      Yup.object().shape({
        type: Yup.string().required('O ID do suco é obrigatório'),
        amount: Yup.number().required('A quantidade é obrigatória').min(1),
        price: Yup.number().required('O preço é obrigatório').min(0),
        sugar: Yup.boolean().optional(),
        ice: Yup.boolean().optional(),
      })
    ),
    addressMachine: Yup.number().required(
      'O Endereço de retirada é obrigatório'
    ),
    pickupDate: Yup.string().required('A data de retirada é obrigatória'),
    total: Yup.string().required('O valor total do pedido é obrigatório'),
  });

  const finishedSchema = Yup.object().shape({});

  const steps = useMemo<StepProps[]>(
    () => [
      {
        key: 'table',
        component: TableDetails,
        schema: Yup.object().shape({
          juices: Yup.array()
            .of(
              Yup.object().shape({
                amount: Yup.number()
                  .min(1, 'A quantidade deve ser pelo menos 1')
                  .required('Quantidade é obrigatória'),
                id: Yup.string().required('ID é obrigatório'),
                sugar: Yup.boolean().optional(),
                ice: Yup.boolean().optional(),
                total: Yup.string().required('Total é obrigatório'),
              })
            )
            .required('Lista de sucos é obrigatória'),
          addressMachine: validationSchema.fields.addressMachine,
        }),
      },
      {
        key: 'schedule',
        component: ScheduleDetails,
        schema: Yup.object().shape({
          pickupDate: validationSchema.fields.pickupDate,
        }),
      },
      // {
      //   key: 'finished',
      //   component: FinishedSteps,
      //   schema: finishedSchema,
      // },
    ],
    []
  );

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setValue,
  } = useForm<FormProps>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const validateCurrentStep = useCallback(async () => {
    try {
      const data = getValues();
      console.log(data, 'data');
      await steps[selected].schema.validate(data, {
        abortEarly: false,
      });
      setDisabled(false);
      return true;
    } catch (err) {
      setDisabled(true);
      return false;
    }
  }, [getValues, selected, steps]);

  const handleNext = useCallback(async () => {
    const isValid = await validateCurrentStep();
    if (isValid && selected < steps.length - 1) {
      setSelected(state => state + 1);
    }
  }, [selected, steps, validateCurrentStep]);

  const handleBack = useCallback(() => {
    if (selected > 0) {
      setSelected(state => state - 1);
    }
  }, [selected]);

  const onSubmit: SubmitHandler<FormProps> = useCallback(async data => {
    try {
      const response = await createOrder({
        addressMachine: data.addressMachine,
        juices: data.juices,
        pickupDate: data.pickupDate,
        total: data.total,
      });
      console.log('Resposta da API:', response?.data);
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  }, []);

  console.log(errors, 'err');

  return (
    <Form onSubmit={handleSubmit(onSubmit)} control={control} name="form">
      <Container>
        {steps.map(
          (Step, index) =>
            selected === index && (
              <Step.component
                next={handleNext}
                back={handleBack}
                key={Step.key}
                control={control}
                validateSchema={validateCurrentStep}
                disabled={disabled}
                errors={errors}
                setValue={setValue}
                getValues={getValues}
              />
            )
        )}
      </Container>
    </Form>
  );
}
