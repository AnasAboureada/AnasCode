import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
  articleId: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  metaTitle: {
    type: String,
    required: true,
  },
  metaDescription: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedDate: {
    type: Date,
    default: Date.now,
  },
  weekNumber: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    default: 'Anas Aboreeda',
  },
  authorImage: {
    type: String,
    default: 'https://avatars.githubusercontent.com/u/22588845?v=4',
  },
  tags: {
    type: [String],
    default: [],
  },
  views: {
    type: Number,
    default: 0,
  },
  claps: {
    type: Number,
    default: 0,
  },
  readTime: {
    type: String,
    required: true,
  },
  bannerImage: {
    type: String,
    required: true,
  },
  highlighted: {
    type: String,
    enum: ['PRIMARY', 'SECONDARY', 'NONE'],
    default: 'NONE',
  },
  published: {
    type: Boolean,
    default: false,
  },
  content: {
    type: String,
    required: true,
  },
});

export interface IArticle extends Document {
  articleId: string;
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  createdDate: Date;
  updatedDate: Date;
  weekNumber: string;
  category: string;
  excerpt: string;
  author: string;
  authorImage: string;
  tags: string[];
  views?: number;
  claps?: number;
  readTime: string;
  bannerImage: string;
  highlighted?: 'PRIMARY' | 'SECONDARY' | 'NONE';
  published: boolean;
  content: string;
}

export default mongoose.models.Article || mongoose.model('Article', ArticleSchema);
