const PageBorder = () => {
    return (
      <div className="page-border" data-wow-duration="0.7s" data-wow-delay="0.2s">
        <div className="top-border wow fadeInDown animated" style={{ visibility: 'visible', animationName: 'fadeInDown' }}></div>
        <div className="right-border wow fadeInRight animated" style={{ visibility: 'visible', animationName: 'fadeInRight' }}></div>
        <div className="bottom-border wow fadeInUp animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}></div>
        <div className="left-border wow fadeInLeft animated" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}></div>
      </div>
    );
  };
  
  export default PageBorder;
  