export interface BlogCardProps {
  _createdAt: string;
  _id: string;
  _updatedAt: string;
  body: {
    _key: string;
    _type: string;
    children: {
      _key: string;
      _type: string;
      marks: any[];
      text: string;
    }[];
    markDefs: any[];
    style: string;
  }[];
  excerpt: string;
  mainImage: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  publishedAt: string;
  slug: {
    _type: string;
    current: string;
  };
  tags: string[];
  title: string;
}
