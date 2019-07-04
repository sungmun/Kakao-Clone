export interface IItemContentOp {
  TabIndex: number;
  Name: string;
  Email?: string;
  Length?: number;
  Event?: () => void;
}
