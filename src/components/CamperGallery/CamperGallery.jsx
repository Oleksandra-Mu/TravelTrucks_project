import css from "./CamperGallery.module.scss";

const CamperGallery = ({ camper }) => {
  return (
    <div>
      <ul className={css.galleryList}>
        {camper.gallery.map((el, index) => (
          <li className={css.galleryItem} key={index}>
            <img
              className={css.camperImage}
              src={el.thumb}
              alt={`Camper image ${index + 1}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CamperGallery;
