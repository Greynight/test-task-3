import React from 'react';
import styled from 'styled-components';

import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const Wrapper = styled.div`
  width: 780px;
  border: solid #252525;
  border-width: 1px 0 2px 0;
`;

const RequestTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RequestTitleText = styled.div`
  padding-top: 17px;
  padding-bottom: 11px;
  color: #252525;
  font: 20px/22px medium;
`;

const RequestTitleSubText = styled.div`
  padding-bottom: 20px;
  color: #252525;
  font: 12px/15px medium;
`;

const RequestData = styled.div`
  padding-bottom: 18px;
  display: flex;
`;

const RequestDataSection = styled.div`
  border: solid #252525;
  border-width: 0 0 0 1px;
  padding-left: 10px;
  padding-right: 25px;
`;

const RequestDataSectionTitle = styled.div`
  color: #767676;
  font: 12px/15px regular;
  padding-bottom: 8px;
`;

const RequestDataSectionText = styled(RequestTitleSubText)`
  padding-bottom: 0;
`;

const RequestControls = styled.div`
  padding-top: 15px;
`;

const InvertedButton = styled.button`
  background-color: black;
  color: white;
  margin-left: 10px;
`;

const Button = styled.button``;

const ErrorIcon = styled(ErrorOutlineIcon)`
  width: 15px!important;
  height: 15px!important;
`;

// TODO
// not sure if the component should be like this, or should be completely
// working and usable, but don't have enough time to do it in another way

// TODO didn't have enough time to finish

const Card = () => {
  return (
    <Wrapper>
      <RequestTitle>
        <div>
          <RequestTitleText>Cancel / recall payment, GBP 1,000.00</RequestTitleText>
          <RequestTitleSubText>1234567890123456 (GB), KUIML Business Company</RequestTitleSubText>
        </div>
        <RequestControls>
          <Button>Reject</Button>
          <InvertedButton>Authorise</InvertedButton>
        </RequestControls>
      </RequestTitle>
      <RequestData>
        <RequestDataSection>
          <RequestDataSectionTitle>Request reference</RequestDataSectionTitle>
          <RequestDataSectionText>SET29383ABCH</RequestDataSectionText>
        </RequestDataSection>
        <RequestDataSection>
          <RequestDataSectionTitle>Category</RequestDataSectionTitle>
          <RequestDataSectionText>Payment</RequestDataSectionText>
        </RequestDataSection>
        <RequestDataSection>
          <RequestDataSectionTitle>Request status</RequestDataSectionTitle>
          <RequestDataSectionText>
            <ErrorIcon />
            Pending authorisation
          </RequestDataSectionText>
        </RequestDataSection>
      </RequestData>

    </Wrapper>
  );
};

export default Card;