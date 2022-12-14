export type Review = {
  id: number;
  user: {
    id: number;
    name: string;
  };
  rating: number;
  comment: string;
  date: string;
}

export type Reviews = Review[]

export type ReviewsList = {
  [id: number]: Reviews;
}
