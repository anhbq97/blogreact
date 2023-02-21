import React, { useState } from "react";
import { Paginate } from './Paginate';
import { Pagination } from 'react-bootstrap';

interface PostPanigateProps {
  paginates: Paginate;
  loadPage: (id: any) => void;
}

function Paginates({ paginates, loadPage }: PostPanigateProps) {
  const prevPage = function (): string {
    let numPage = paginates.current_page - 1;
    return numPage.toString();
  }

  const handleLoadPage = (event: any) => {
    event.preventDefault();
    loadPage(event.target.dataset.url);
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
      <Pagination.Item onClick={handleLoadPage} data-url={link.label} key={i} active={link.active}>{link.label}</Pagination.Item>
  ));

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4 col-sm-12">
        <Pagination className="pagination justify-content-center">
          <Pagination.First onClick={handleLoadPage} data-url={0}/>
          <Pagination.Prev onClick={handleLoadPage} data-url={prevPage()} />

          {items}

          <Pagination.Next onClick={handleLoadPage} data-url={nextPage()} />
          <Pagination.Last onClick={handleLoadPage} data-url={paginates.last_page}/>
        </Pagination>
      </div>
    </div>
  );

}

export default Paginates;