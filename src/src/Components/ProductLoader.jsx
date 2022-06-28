import Skeleton from 'react-loading-skeleton'
import React, { Fragment } from 'react'

export const ProductLoader = () => {
  return (
    <Fragment>
        <div>
            <Skeleton height={250} width={250}/>
            <Skeleton count={4}/>
        </div>
        <div>
            <Skeleton height={250} width={250}/>
            <Skeleton count={4}/>
        </div>
        <div>
            <Skeleton height={250} width={250}/>
            <Skeleton count={4}/>
        </div>
        <div>
            <Skeleton height={250} width={250}/>
            <Skeleton count={4}/>
        </div>
    </Fragment>
  )
}
