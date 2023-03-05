export class Product {
  id: number | undefined;
  name: string = '';
  tag_name: string = '';
  description: string = '';
  category_id: number | undefined;
  images: string = '';
  status: number | undefined;
  seo_title: string = '';
  seo_description: string = '';
  user_id: number | undefined;
  created_at: Date = new Date();

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.name) this.name = initializer.name;
    if (initializer.tag_name) this.tag_name = initializer.tag_name;
    if (initializer.description) this.description = initializer.description;
    if (initializer.category_id) this.category_id = initializer.category_id;
    if (initializer.images) this.images = initializer.images;
    if (initializer.status) this.status = initializer.status;
    if (initializer.seo_title) this.seo_title = initializer.seo_title;
    if (initializer.seo_description) this.seo_description = initializer.seo_description;
    if (initializer.user_id) this.user_id = initializer.user_id;
    if (initializer.created_at)
      this.created_at = new Date(initializer.created_at);
  }
}