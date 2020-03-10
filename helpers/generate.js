import Faker from "faker";
import randomInt from "./random";
import {
  GENDER,
  SENIORITY,
  TECH_FIELD,
  DEGREE,
  LANGUAGE
} from "../database/helper/constant";

function generateDegree() {
  switch (randomInt(1, 4)) {
    case 1:
      return DEGREE.DOCTOR;
    case 2:
      return DEGREE.MASTER;
    case 3:
      return DEGREE.OTHER;
    case 4:
      return DEGREE.BACHELOR;
  }
}

function getSeniority() {
  switch (randomInt(1, 5)) {
    case 1:
      return SENIORITY.JUNIOR;
    case 2:
      return SENIORITY.LEAD;
    case 3:
      return SENIORITY.MANAGER;
    case 4:
      return SENIORITY.MIDDLE;
    case 5:
      return SENIORITY.SENIOR;
  }
}

function getTechnology() {
  switch (randomInt(1, 4)) {
    case 1:
      return TECH_FIELD.BUSINESS;
    case 2:
      return TECH_FIELD.DESIGN;
    case 3:
      return TECH_FIELD.DEVELOPER;
    case 4:
      return TECH_FIELD.MARKETING;
  }
}

export const generateCandidateAttribute = () => {
  const user_name = Faker.internet.userName(),
    password = Faker.internet.password(),
    candidate_name = Faker.name.firstName(),
    candidate_lastname = Faker.name.lastName(),
    date_of_birth = Faker.date.past(),
    gender = randomInt(1, 2) === 1 ? GENDER.MALE : GENDER.FEMALE,
    telephone = Faker.phone.phoneNumber(),
    email = Faker.internet.email(),
    able_to_work_aboard = randomInt(1, 2) === 1 ? true : false,
    current_salary = Math.floor(Faker.finance.amount(10000, 100000)),
    expected_salary = Math.floor(current_salary * 1.2),
    seniority = getSeniority(),
    technology_field = getTechnology();
  return {
    user_name,
    password,
    candidate_name,
    candidate_lastname,
    date_of_birth,
    gender,
    telephone,
    email,
    able_to_work_aboard,
    current_salary,
    expected_salary,
    seniority,
    technology_field
  };
};

export const generateCandidateEducation = candidate_id => {
  const university = `University of ${Faker.address.city()}`,
    major = `${Faker.name.jobType()} and ${Faker.name.jobArea()}`,
    graduate_date = Faker.date.past(),
    degree = generateDegree(),
    gpa = Faker.finance.amount(1, 4, 2);
  return {
    university,
    major,
    graduate_date,
    degree,
    gpa,
    candidate_id
  };
};

export const generateWorkExperience = candidate_id => {
  const year = randomInt(1980, 2010);
  return {
    position: Faker.name.jobTitle(),
    company: Faker.company.companyName(),
    description: Faker.company.catchPhrase(),
    location: Faker.address.streetAddress(),
    start_date: Faker.date.past(year),
    end_date: Faker.date.past(year + 4),
    candidate_id
  };
};

export const generateSkill = candidate_id => {
  return {
    candidate_id,
    skill_name: `${Faker.name.jobType()} skill`,
    skill_experience: randomInt(1, 5)
  };
};

export const generateArcheivement = candidate_id => {
  return {
    candidate_id,
    title: `${Faker.company.catchPhrase()} ${Faker.company.bs()}`,
    archieve_date: Faker.date.past()
  };
};

export const getLangauge = num => {
  switch (num) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    case 4:
      return 4;
    case 5:
      return 5;
  }
};

export const generateCompanyAttribute = () => {
  return {
    company_name: Faker.company.companyName(),
    company_description: Faker.lorem.sentences(),
    company_logo: Faker.image.avatar(),
    company_address: `${Faker.address.city()} ${Faker.address.streetName()} 
      ${Faker.address.streetAddress()} ${Faker.address.zipCode()}`
  }
}

export const generatePositionAttribute = (company_id) => {
  return {
    title: Faker.name.jobTitle(),
    description: Faker.lorem.sentences(),
    level: getSeniority(),
    degree: generateDegree(),
    field: getTechnology(),
    is_open: randomInt(1, 2) === 1,
    amount: randomInt(1, 10),
    company_id
  }
}