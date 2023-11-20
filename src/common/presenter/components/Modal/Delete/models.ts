export type PropsModalFilters = {
  testID?: string;
  isVisible?: boolean;
  product?: string;
  modalHeight?: number;
  onDelete(): void;
  onClose(): void;
};
