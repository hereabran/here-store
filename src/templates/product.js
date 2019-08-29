import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {getPages, Link, safePrefix} from '../utils';
import Picture from '../components/Picture';
import BuyButton from '../components/BuyButton';
import ProductGrid from '../components/ProductGrid';

export default class Product extends React.Component {
    render() {
        let category_page = _.head(_.filter(getPages(this.props.pageContext.pages, '/category'), ['frontmatter.slug', _.get(this.props, 'pageContext.frontmatter.category')]));
        let product_pages = _.filter(_.orderBy(_.filter(getPages(this.props.pageContext.pages, '/products'), ['frontmatter.category', _.get(category_page, 'frontmatter.slug')]), 'frontmatter.title'), item => _.get(item, 'frontmatter.id') != _.get(this.props, 'pageContext.frontmatter.id'));
        return (
            <Layout {...this.props}>
                <main class="content">
                    <section class="product content__row content__row--bleed">  
                        <div class="product__background-left-overlay" />
                        <div class="product__background-left" />
                        <div class="product__background-right" />
                        <div class="product__header">
                            <Link to="/store" class="product__back-to-store-link">
                                <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.73859 4.30914H19.75V5.59286H2.63961L6.06986 8.98864L5.17449 9.875L0.25 5L5.17449 0.125L6.06986 1.01136L2.73859 4.30914Z" fill="#88DD9B"/>
                                </svg>                        
                                see all products
                            </Link>
                        </div>
                        <figure class="product__figure">
                            <Picture {...this.props} image={_.get(this.props, 'pageContext.frontmatter.images.default.original')} alt={_.get(this.props, 'pageContext.frontmatter.title')} cssClass={'product__image'} />
                        </figure>
                        <div class="product__details">
                            <h1 class="product__title">
                                {_.get(this.props, 'pageContext.frontmatter.title')}
                            </h1>
                            <h2 class="product__category"> 
                                <Link to={safePrefix(_.get(category_page, 'url'))}> {_.get(category_page, 'frontmatter.title')} </Link>
                            </h2>
                            <div class="product__price">
                                ${_.get(this.props, 'pageContext.frontmatter.price')}
                            </div>
                            <article class="product__description">
                                {_.get(this.props, 'pageContext.frontmatter.description')}
                            </article>
                            <BuyButton {...this.props} product_page={this.props.pageContext} />
                        </div>
                    </section>
                    <section class="content__row">
                        <h2 class="content__row-title">Related</h2>
                        <ProductGrid {...this.props} product_pages={product_pages} cssClass={'product-grid--draggable'} />
                    </section>
                    <Link to="/store" class="content__row content__row--bleed product__back-to-store">
                        <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.73859 4.30914H19.75V5.59286H2.63961L6.06986 8.98864L5.17449 9.875L0.25 5L5.17449 0.125L6.06986 1.01136L2.73859 4.30914Z" fill="white"/>
                        </svg>                        
                        see all products
                    </Link>
                </main>
            </Layout>
        );
    }
}
