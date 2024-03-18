import React from "react";

const Gallery = () => {
  return (
    <aside
      id="gallery"
      className="row text-center scrollto clearfix"
      data-featherlight-gallery
      data-featherlight-filter="a"
    >
      {/* Fill in your gallery images here */}
      <a
        href="/src/images/gallery-images/gallery-image-1.jpg"
        data-featherlight="image"
        class="col-3 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <img
          src="/src/images/gallery-images/gallery-image-1.jpg"
          alt="Landing Page"
        />
      </a>
      <a
        href="/src/images/gallery-images/gallery-image-2.jpg"
        data-featherlight="image"
        class="col-3 wow fadeIn"
        data-wow-delay="0.3s"
      >
        <img
          src="/src/images/gallery-images/gallery-image-2.jpg"
          alt="Landing Page"
        />
      </a>
      <a
        href="/src/images/gallery-images/gallery-image-3.jpg"
        data-featherlight="image"
        class="col-3 wow fadeIn"
        data-wow-delay="0.5s"
      >
        <img
          src="/src/images/gallery-images/gallery-image-3.jpg"
          alt="Landing Page"
        />
      </a>
      <a
        href="/src/images/gallery-images/gallery-image-4.jpg"
        data-featherlight="image"
        class="col-3 wow fadeIn"
        data-wow-delay="1.1s"
      >
        <img
          src="/src/images/gallery-images/gallery-image-4.jpg"
          alt="Landing Page"
        />
      </a>
      <a
        href="/src/images/gallery-images/gallery-image-5.jpg"
        data-featherlight="image"
        class="col-3 wow fadeIn"
        data-wow-delay="0.9s"
      >
        <img
          src="/src/images/gallery-images/gallery-image-5.jpg"
          alt="Landing Page"
        />
      </a>
      <a
        href="/src/images/gallery-images/gallery-image-6.jpg"
        data-featherlight="image"
        class="col-3 wow fadeIn"
        data-wow-delay="0.7s"
      >
        <img
          src="/src/images/gallery-images/gallery-image-6.jpg"
          alt="Landing Page"
        />
      </a>
    </aside>
  );
};

export default Gallery;
