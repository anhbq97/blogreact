import { User } from '../users/User';

export class Post {
  id: number | undefined;
  title: string = '';
  title_tag: string = '';
  summary: string = '';
  image: string = '';
  content: string = '';
  post_status_id: number | undefined;
  user: User = {
    name: '',
  };
  users_id: number | undefined;
  created_at: Date = new Date();
  get isNew(): boolean {
    return this.id === undefined;
  }

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.title) this.title = initializer.title;
    if (initializer.title_tag) this.title_tag = initializer.title_tag;
    if (initializer.summary) this.summary = initializer.summary;
    if (initializer.image) this.image = initializer.image;
    if (initializer.content) this.content = initializer.content;
    if (initializer.post_status_id) this.post_status_id = initializer.post_status_id;
    if (initializer.user) this.user = initializer.user;
    if (initializer.users_id) this.users_id = initializer.users_id;
    if (initializer.created_at)
      this.created_at = new Date(initializer.created_at);
  }
}