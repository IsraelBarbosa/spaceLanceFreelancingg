import "./NewsletterSubscription.scss";
import Container from "../Container/Container";
import NewsletterSubscriptionLayout from "../../layout/NewsletterSubscriptionLayout/NewsletterSubscriptionLayout";

function NewsletterSubscription() {
  return (
    <NewsletterSubscriptionLayout>
      <Container>
        <div className="newsletter-subscription">
          <h1 className="newsletter-subscription__titulo">
            Newsletter Subscription
          </h1>
          <h2 className="newsletter-subscription__sub-titulo">
            Subscribe to our newsletter to get new freelance work and projects
          </h2>
          <form className="newsletter-subscription__form" action="#">
            <input
              className="newsletter-subscription__form__input"
              type="email"
              placeholder="Enter your email address"
            />
            <button
              className="newsletter-subscription__form__btn"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </Container>
    </NewsletterSubscriptionLayout>
  );
}

export default NewsletterSubscription;
