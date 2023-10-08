type MarketItem = {
  marketId: string;
  language: string;
  country: string;
  _links: {
    self: string;
    classes: string;
    bodies: string;
    models: string;
    productgroups: string;
  };
};

export type { MarketItem };
