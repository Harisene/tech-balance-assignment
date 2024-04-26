
export interface FAQCategory {
  id: string;
  name: string;
  faqs: FAQ[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}