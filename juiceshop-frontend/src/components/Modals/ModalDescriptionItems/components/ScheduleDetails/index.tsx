import { ChangeEvent, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { ComponentProps } from '../..';
import { Container, ContainerHour } from './styles';
import { eachMinuteOfInterval, format, setHours, setMinutes } from 'date-fns';
import { QRCodeCanvas } from 'qrcode.react';
import { useCart } from '../../../../../hooks/useCart';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export function ScheduleDetails({
  back,
  setValue,
  errors,
  disabled,
  next,
}: ComponentProps) {
  const [value, onChange] = useState<Value>(new Date());
  const [selectedValue, setSelectedValue] = useState('');
  const parseDateString = String(value);
  const { cart } = useCart();

  const start = setHours(parseDateString, 8);
  const end = setHours(parseDateString, 22);

  const hours = eachMinuteOfInterval(
    {
      start,
      end,
    },
    {
      step: 25,
    }
  );

  function handleDate(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedValue(event.target.value);
  }

  useEffect(() => {
    const dateSchedule = new Date(parseDateString);

    const hourSchedule = selectedValue.slice(0, 2);
    const minutesSchedule = selectedValue.slice(3);

    const dateWithHourAndMinutesGMT = setMinutes(
      setHours(dateSchedule, Number(hourSchedule)),
      Number(minutesSchedule)
    );
    setValue('pickupDate', dateWithHourAndMinutesGMT.toString());
  }, [cart, setValue, parseDateString, selectedValue]);

  console.log(errors, 'err');

  return (
    <Container>
      <div>
        <h1>Agendar Retirada</h1>
        <p>Confirme o dia e a hora de retirada do seu suco</p>
        <div>
          <Calendar onChange={onChange} value={value} defaultValue={value} />
        </div>
      </div>

      <ContainerHour>
        <div>
          <label>
            Escolha o horário
            <select
              value={selectedValue}
              style={{ marginTop: 16 }}
              onChange={handleDate}
              defaultValue={setHours(new Date(), 8).getHours()}
            >
              {hours.map(item => {
                const formattedHours = format(item, 'HH:mm');
                return <option key={item.getTime()}>{formattedHours}</option>;
              })}
            </select>
          </label>
        </div>
      </ContainerHour>

      <footer>
        <button type="button" onClick={back}>
          Voltar
        </button>
        <button type="submit" onClick={next} disabled={disabled}>
          Finalizar
        </button>
      </footer>
    </Container>
  );
}
