import Image from 'next/image';
import Link from 'next/link';

import  countMinutes from '../../utils/minutesToRead';
import  convertDate  from '../../utils/convertDate';

import style from './cardBlog.module.scss';

export default function CardBlog({ post }) {
  return (
    <div
      className={ style.postItem }
      tabIndex={ 0 }
      onKeyDown={ (event) => event.key === 'Enter' && event.currentTarget.click() }
      role='button'>
      <Link
        passHref
        href={ `/post/${ post.slug }` }>
        <figure className={ style.image }>
          <Image
            alt={ post.title }
            src={ post.images.thumbnail.src || '/img/image_icon.png' }
            width={ post.images.thumbnail.width }
            height={ post.images.thumbnail.height }
            objectFit='cover'
            layout='responsive'
            quality={ 100 }
            priority
          />
          <figcaption>{`Imagem: ${ post.title}`}
          </figcaption>
        </figure>
      </Link>

      <Link
        passHref
        href={ `/post/${ post.slug }` }>
        <div className={ style.text }>
          <div className={ style.category }>
            { post.categories.map((category) => (
                <span key={ category.id }>{ category.name }</span>
              )) }
            <span>{ convertDate(post.createdAt) }</span>

            <span>{ countMinutes(post.content) }</span>
          </div>
          <h3>{ post.title.substring(0, 90) }</h3>
          <p>{ post.content.substring(0, 150).concat(' (...)') }</p>
        </div>
      </Link>
    </div>
  );
}
