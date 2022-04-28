import React from "react";

import { 
  AdmissionDate,
  Card,
  InfoArea,
  Name,
} from './style';
import { convertDate } from "../../helpers/convertDate";

type PersonCardTypes = {
  name: String;
  admission_date: String;
}

export function PersonCard({ name, admission_date, onPress, ...props }: PersonCardTypes) {
    const first_name = name.split(' ')[0];

    const dataConverted = convertDate(admission_date);

    return (
      <Card onPress={onPress}>
        <InfoArea>
          <Name>{first_name}</Name>
          <AdmissionDate>Data de admissão: {dataConverted}</AdmissionDate>
        </InfoArea>
      </Card>
    );
};