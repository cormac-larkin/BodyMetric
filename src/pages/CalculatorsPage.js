import PageHeader from "../components/PageHeader";

import calculatorIcon from "../images/calculator-icon.svg";

function CalculatorsPage(props) {
  return (
    <>
      <PageHeader
        image={calculatorIcon}
        title="Calculators"
        description="Use our range of calculators to fine-tune your diet and exercise routine!"
      />
    </>
  );
}

export default CalculatorsPage;
