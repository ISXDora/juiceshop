import { QRCodeCanvas } from 'qrcode.react';
import { ComponentProps } from '../..';

export function FinishedSteps({}: ComponentProps) {
  return (
    <div>
      <h1>Obrigada</h1>

      <h3>Volte sempre</h3>

      <div>
        <label>
          Copie seu QR Code e acompanhe seu pedido
          <QRCodeCanvas value="Ok" style={{ marginTop: 16 }} />
        </label>
      </div>
    </div>
  );
}
