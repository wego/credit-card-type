import type { CreditCardType, CreditCardTypeCardBrandId } from "./types";
declare function creditCardType(cardNumber: string): Array<CreditCardType>;
declare namespace creditCardType {
    var getTypeInfo: (cardType: string) => CreditCardType;
    var removeCard: (name: string) => void;
    var addCard: (config: CreditCardType) => void;
    var updateCard: (cardType: string, updates: Partial<CreditCardType>) => void;
    var changeOrder: (name: string, position: number) => void;
    var resetModifications: () => void;
    var types: Record<string, CreditCardTypeCardBrandId>;
}
export default creditCardType;
