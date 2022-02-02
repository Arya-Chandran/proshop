import React from 'react'
import { Pagination, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Pagination.Item active={x + 1 === page}>
            <Link
              key={x + 1}
              to={
                !isAdmin
                  ? keyword
                    ? `/search/${keyword}/page/${x + 1}`
                    : `/page/${x + 1}`
                  : `/admin/productlist/${x + 1}`
              }
            >
              {x + 1}
            </Link>
          </Pagination.Item>
        ))}
      </Pagination>
    )
  )
}

export default Paginate
