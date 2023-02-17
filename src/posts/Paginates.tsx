import React from "react";
import { Paginate } from './Paginate';
import { Pagination } from 'react-bootstrap';

interface PostPanigateProps {
  paginates: Paginate;
}

function Paginates({ paginates }: PostPanigateProps) {
  // const { links } = paginates;
  const prevPage = function (): string {
    let numPage = paginates.current_page - 1;
    return numPage.toString();
  }

  const listPage = function () {
    let newLink: { label: number; }[] = [];
    let distance = [-1, -2, -3, 0, 1, 2, 3];

    paginates.links?.forEach(link => {
      if (distance.includes(link.label - paginates.current_page)) {
        newLink.push(link);
      }
    });

    return newLink;
  }

  const nextPage = function (): string {
    let numPage = paginates.current_page + 1;
    return numPage.toString();
  }

  const items = listPage().map((link: any, i: number) => (
      <Pagination.Item key={i} href={link.url} active={link.active}>{link.label}</Pagination.Item>
  ));

  return (
    <div className="row">
      <Pagination className="pagination center-page">
        <Pagination.First />
        <Pagination.Prev href={prevPage()} />

        {items}

        <Pagination.Next href={nextPage()} />
        <Pagination.Last />
      </Pagination>
    </div>
  );

}

export default Paginates;