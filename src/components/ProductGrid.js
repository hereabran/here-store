import React from 'react';
import _ from 'lodash';

import {safePrefix, Link} from '../utils';
import Picture from './Picture';
import SmallBuyButton from './SmallBuyButton';

export default class ProductGrid extends React.Component {
    render() {
        let product_pages = _.get(this.props, 'product_pages');
        let listCssClass = _.get(this.props, 'cssClass');
        return (
            <ul class={'product-grid ' + (listCssClass ? listCssClass : '')}>
                {_.map(product_pages, (product_page, product_page_idx) => (
                    <li key={product_page_idx} class="product-grid__item">
                        <figure data-href={safePrefix(_.get(product_page, 'url'))} class="product-grid__item-figure js-figure-link">
                            <Picture {...this.props} image={_.get(product_page, 'frontmatter.images.default.thumbnail')} alt={_.get(product_page, 'frontmatter.title')} cssClass={'product-grid__item-image'} />
                            <figcaption>
                                <SmallBuyButton {...this.props} product_page={product_page} component={'product-grid'} />
                            </figcaption>
                        </figure>
                        <div class="product-grid__definition">
                            <Link to={safePrefix(_.get(product_page, 'url'))}><h3 class="product-grid__title">{_.get(product_page, 'frontmatter.title')}</h3></Link>
                            <span class="product-grid__category"> {_.get(product_page, 'frontmatter.category')} </span>
                            <span class="product-grid__price"> ${_.get(product_page, 'frontmatter.price')} </span>
                        </div>
                    </li>
                ))}
            </ul>
        );
    }
}
