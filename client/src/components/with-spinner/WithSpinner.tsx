import { SpinnerContainer, SpinnerOverlay } from "./WithSpinner.styles"

export function WithSpinner(Component) {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
          <SpinnerOverlay>
            <SpinnerContainer />
          </SpinnerOverlay>
        ) : (
          <Component {...otherProps} />
        );
      };
      return Spinner;
}

