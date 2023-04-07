import {Control, FieldValue} from 'react-hook-form';

export interface IWaitProductsData {
  orderId: number,
  orderTitle: string,
  userId: number
  userEmail: string,
  orderLongId: number,
  orderTrackNumber: number,
  userName: string,
  orderInvoiceCheck: boolean,
}

export type WaitProductItemProps = IWaitProductsData & {
  control: Control<FieldValue<any>>;
  onClick: () => void;
}
