export class Paginate {
  current_page: number = 0;
  first_page_url: string = '';
  last_page_url: string = '';
  next_page_url: string = '';
  links: Array<{
    label: number
  }> | undefined;

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.current_page) this.current_page = initializer.current_page;
    if (initializer.first_page_url) this.first_page_url = initializer.first_page_url;
    if (initializer.last_page_url) this.last_page_url = initializer.last_page_url;
    if (initializer.next_page_url) this.next_page_url = initializer.next_page_url;
    if (initializer.links) this.links = initializer.links;
  }
}