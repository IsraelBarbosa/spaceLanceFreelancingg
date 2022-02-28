import "./ChooseDifferent.scss";
import Container from "../Container/Container";
import graphicDesignBackground from "../../images/ChooseDiferent/graphic&DesignBackground.png";
import videoEditingBackground from "../../images/ChooseDiferent/videoEditingBackground.png";
import flyersVouchersBackground from "../../images/ChooseDiferent/flyers&VouchersBackground.png";
import articleWritingBackground from "../../images/ChooseDiferent/articleWritingBackground.png";
import illustrationBackground from "../../images/ChooseDiferent/illustrationBackground.png";
import socialGraphicsBackground from "../../images/ChooseDiferent/socialGraphicsBackground.png";
import cartoonAnimationBackground from "../../images/ChooseDiferent/cartoonAnimationBackground.png";
import logoDesignBackground from "../../images/ChooseDiferent/logoDesignBackground.png";
import ChooseDifferentLayout from "../../layout/ChooseDifferentLayout/ChooseDifferentLayout";

let categorysArray = [
  {
    imgBackground: graphicDesignBackground,
    titulo: "Graphic&Design",
  },
  {
    imgBackground: cartoonAnimationBackground,
    titulo: "Cartoon Animation",
  },
  {
    imgBackground: illustrationBackground,
    titulo: "Illustration",
  },
  {
    imgBackground: flyersVouchersBackground,
    titulo: "Flyers & Vouchers",
  },
  {
    imgBackground: logoDesignBackground,
    titulo: "Logo Design",
  },
  {
    imgBackground: socialGraphicsBackground,
    titulo: "Social graphics",
  },
  {
    imgBackground: articleWritingBackground,
    titulo: "Article writing",
  },
  {
    imgBackground: videoEditingBackground,
    titulo: "Video Editing",
  },
];

function ChooseDifferent() {
  return (
    <ChooseDifferentLayout>
      <Container>
        <div className="choose-different">
          <h1 className="choose-different__titulo">
            Choose Different{" "}
            <span className="choose-different__titulo-destaque">Category</span>
          </h1>
          <div className="choose-different-container-categorys">
            {categorysArray.map((category, index) => (
              <div
                className="choose-different__category"
                key={index}
                style={{ backgroundImage: `url("${category.imgBackground}")` }}
              >
                <h1 className="choose-different__category__titulo">
                  {category.titulo}
                </h1>
              </div>
            ))}
          </div>
          <button className="choose-different__btn">More Categories</button>
        </div>
      </Container>
    </ChooseDifferentLayout>
  );
}

export default ChooseDifferent;
