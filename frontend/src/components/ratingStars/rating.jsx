const Rating = ({ rating }) => {
  let stars;

  if (rating < 0.5) {
    stars = (
      <>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
      </>
    );
  } else if (rating >= 0.5 && rating < 1) {
    stars = (
      <>
        <span className="material-icons-round">star_half</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
      </>
    );
  } else if (rating >= 1 && rating < 1.5) {
    stars = (
      <>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
      </>
    );
  } else if (rating >= 1.5 && rating < 2) {
    stars = (
      <>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star_half</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
      </>
    );
  } else if (rating >= 2 && rating < 2.5) {
    stars = (
      <>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
      </>
    );
  } else if (rating >= 2.5 && rating < 3) {
    stars = (
      <>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star_half</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
      </>
    );
  } else if (rating >= 3 && rating < 3.5) {
    stars = (
      <>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star_border</span>
        <span className="material-icons-round">star_border</span>
      </>
    );
  } else if (rating >= 3.5 && rating < 4) {
    stars = (
      <>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star_half</span>
        <span className="material-icons-round">star_border</span>
      </>
    );
  } else if (rating >= 4 && rating < 4.5) {
    stars = (
      <>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star_border</span>
      </>
    );
  } else if (rating >= 4.5 && rating < 5) {
    stars = (
      <>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star_half</span>
      </>
    );
  } else if (rating === 5) {
    stars = (
      <>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
        <span className="material-icons-round">star</span>
      </>
    );
  }
  return stars;
};

export default Rating;
