import PageHeader from "../PageHeader";

import calculatorIcon from "../../images/calculator-icon.svg";

import classes from "./CalculatorPage.module.css";
import LinkContainer from "../UI/LinkContainer";

function CalculatorsPage(props) {
  return (
    <>
      <PageHeader
        image={calculatorIcon}
        title="Calculators"
        description="Use our range of calculators to fine-tune your diet and exercise routine!"
      />
      <div className={classes.contentWrapper}>
        <LinkContainer
          href="/calculators/bmr"
          calcName="Basal Metabolic Rate"
        />
        <LinkContainer
          href="/calculators/tdee"
          calcName="Total Daily Energy Expenditure"
        />
        <LinkContainer href="/calculators/ffmi" calcName="Fat-Free Mass Index" />
        <LinkContainer href="/calculators/bmr" calcName="Body Mass Index" />
      </div>
    </>
  );
}

export default CalculatorsPage;
