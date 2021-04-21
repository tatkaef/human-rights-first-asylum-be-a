// * This data was mocked by manually "scraping" PDFs that were provided to us.

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cases')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('cases').insert([
        {
          primary_key: 1,
          user_id: '00ulzdrizE2yzxToH5d6',
          case_id: 'A094-216-526',
          case_url: '2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          hearing_date: '1-24-2013',
          judge: 1,
          initial_or_appellate: false,
          case_origin: 'Baltimore, MD',
          case_filed_within_one_year: false,
          application_type: 'initial',
          protected_ground: 'true',
          case_outcome: 'Denied',
          nation_of_origin: 'Mexico',
          applicant_gender: 'Male',
          type_of_violence_experienced: 'Not Applicable',
          applicant_indigenous_group: 'Not Applicable',
          applicant_language: 'Spanish',
          applicant_access_to_interpreter: false,
          applicant_perceived_credibility: true,
        },
        {
          primary_key: 2,
          user_id: '00ulzdrizE2yzxToH5d6',
          case_id: 'A079-531-484',
          case_url: '2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          hearing_date: '8-30-2012',
          judge: 2,
          initial_or_appellate: false,
          case_origin: 'Los Angeles, CA',
          case_filed_within_one_year: true,
          application_type: 'initial',
          protected_ground: 'true',
          case_outcome: 'Granted',
          nation_of_origin: 'El Salvador',
          applicant_gender: 'Female',
          type_of_violence_experienced: 'Not Applicable',
          applicant_indigenous_group: 'Not Applicable',
          applicant_language: 'English',
          applicant_access_to_interpreter: true,
          applicant_perceived_credibility: false,
        },
        {
          primary_key: 3,
          user_id: '00ulzcegtVucXsfdp5d6',
          case_id: 'A043-400-049',
          case_url: '2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          hearing_date: '12-18-2012',
          judge: 3,
          initial_or_appellate: false,
          case_origin: 'New York, NY',
          case_filed_within_one_year: false,
          application_type: 'initial',
          protected_ground: 'true',
          case_outcome: 'Denied',
          nation_of_origin: 'Jamaica',
          applicant_gender: 'Female',
          type_of_violence_experienced: 'Not Applicable',
          applicant_perceived_credibility: true,
          applicant_access_to_interpreter: true,
          applicant_indigenous_group: 'Not Applicable',
          applicant_language: 'English',
        },
        {
          primary_key: 4,
          user_id: '00ulzcegtVucXsfdp5d6',
          case_id: 'A088-268-610',
          case_url: '2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          judge: 4,
          initial_or_appellate: false,
          nation_of_origin: 'Jamaica',
          case_origin: 'Boston, MA',
          hearing_date: '12-14-2012',
          applicant_perceived_credibility: false,
          applicant_access_to_interpreter: false,
          applicant_indigenous_group: 'Not Applicable',
          applicant_language: 'English',
          case_filed_within_one_year: false,
          case_outcome: 'Denied',
          applicant_gender: 'Female',
          type_of_violence_experienced: 'Not Applicable',
          application_type: 'initial',
          protected_ground: 'true',
        },
        {
          primary_key: 5,
          user_id: '00ulzg60x94UujHsV5d6',
          case_id: 'A057-056-1193',
          case_url: '2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          judge: 5,
          initial_or_appellate: false,
          nation_of_origin: 'Mexico',
          case_origin: 'Imperial, CA',
          hearing_date: '2-8-2013',
          applicant_perceived_credibility: false,
          applicant_access_to_interpreter: true,
          applicant_indigenous_group: 'Not Applicable',
          applicant_language: 'Spanish',
          case_filed_within_one_year: false,
          case_outcome: 'Denied',
          applicant_gender: 'Female',
          type_of_violence_experienced: 'Not Applicable',
          application_type: 'initial',
          protected_ground: 'true',
        },
        {
          primary_key: 6,
          user_id: '00ulzg60x94UujHsV5d6',
          case_id: 'A071-996-819',
          case_url: '2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          judge: 3,
          initial_or_appellate: false,
          nation_of_origin: 'Mexico',
          case_origin: 'Chicago, IL',
          hearing_date: '9-14-2012',
          applicant_perceived_credibility: false,
          applicant_access_to_interpreter: true,
          applicant_indigenous_group: 'Not Applicable',
          applicant_language: 'Spanish',
          case_filed_within_one_year: true,
          case_outcome: 'Remanded',
          applicant_gender: 'Female',
          type_of_violence_experienced: 'Not Applicable',
          application_type: 'initial',
          protected_ground: 'true',
        },
        {
          primary_key: 7,
          user_id: '00ulzenirO3Evj2U95d6',
          case_id: 'A093-138-113',
          case_url: '2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          judge: 5,
          initial_or_appellate: false,
          nation_of_origin: 'Guatemala',
          case_origin: 'Imperial, CA',
          hearing_date: '3-07-2013',
          applicant_perceived_credibility: true,
          applicant_access_to_interpreter: true,
          applicant_indigenous_group: 'Not Applicable',
          applicant_language: 'Spanish',
          case_filed_within_one_year: false,
          case_outcome: 'Remanded',
          applicant_gender: 'Female',
          type_of_violence_experienced: 'Not Applicable',
          application_type: 'initial',
          protected_ground: 'true',
        },
        {
          primary_key: 8,
          user_id: '00ulzenirO3Evj2U95d6',
          case_id: 'A027-392-198',
          case_url: '2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          judge: 4,
          initial_or_appellate: false,
          nation_of_origin: 'Mexico',
          case_origin: 'Seattle, WA',
          hearing_date: '6-12-2012',
          applicant_perceived_credibility: false,
          applicant_access_to_interpreter: true,
          applicant_indigenous_group: 'Not Applicable',
          applicant_language: 'Spanish',
          case_filed_within_one_year: false,
          case_outcome: 'Remanded',
          applicant_gender: 'Female',
          type_of_violence_experienced: 'Not Applicable',
          application_type: 'initial',
          protected_ground: 'true',
        },
        {
          primary_key: 9,
          user_id: '00ulzdb18iCY1wMep5d6',
          case_id: 'A028-803-028',
          case_url: '2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          judge: 4,
          initial_or_appellate: false,
          nation_of_origin: 'El Salvador',
          case_origin: 'San Francisco, CA',
          hearing_date: '4-3-2012',
          applicant_perceived_credibility: false,
          applicant_access_to_interpreter: true,
          applicant_indigenous_group: 'Not Applicable',
          applicant_language: 'English',
          case_filed_within_one_year: true,
          case_outcome: 'Denied',
          applicant_gender: 'Female',
          type_of_violence_experienced: 'Not Applicable',
          application_type: 'initial',
          protected_ground: 'true',
        },
        {
          primary_key: 10,
          user_id: '00ulzdb18iCY1wMep5d6',
          case_id: 'A089-207-04',
          case_url: '2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          judge: 2,
          initial_or_appellate: false,
          nation_of_origin: 'Honduras',
          case_origin: 'Imperial, CA',
          hearing_date: '1-31-2012',
          applicant_perceived_credibility: false,
          applicant_access_to_interpreter: false,
          applicant_indigenous_group: 'Not Applicable',
          applicant_language: 'Spanish',
          case_filed_within_one_year: false,
          case_outcome: 'Sustained',
          applicant_gender: 'Female',
          type_of_violence_experienced: 'Not Applicable',
          application_type: 'initial',
          protected_ground: 'true',
        },
        {
          primary_key: 11,
          user_id: '00ulzfj6nX79gu0Nh5d6',
          case_id: 'A044-857-956',
          case_url: '2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          judge: 2,
          initial_or_appellate: false,
          nation_of_origin: 'Mexico',
          case_origin: 'San Antonio, TX',
          hearing_date: '12-15-2011',
          applicant_perceived_credibility: false,
          applicant_access_to_interpreter: true,
          applicant_indigenous_group: 'Not Applicable',
          applicant_language: 'Spanish',
          case_filed_within_one_year: false,
          case_outcome: 'Terminated',
          applicant_gender: 'Female',
          type_of_violence_experienced: 'Not Applicable',
          application_type: 'initial',
          protected_ground: 'true',
        },
        {
          primary_key: 12,
          user_id: '00ulzfj6nX79gu0Nh5d6',
          case_id: 'A095-094-694 ',
          case_url: '2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          judge: 6,
          initial_or_appellate: false,
          nation_of_origin: 'Jamaica',
          case_origin: 'Orlando, FL',
          hearing_date: '11-16-2012',
          applicant_perceived_credibility: false,
          applicant_access_to_interpreter: true,
          applicant_indigenous_group: 'Not Applicable',
          applicant_language: 'English',
          case_filed_within_one_year: false,
          case_outcome: 'Denied',
          applicant_gender: 'Female',
          type_of_violence_experienced: 'Not Applicable',
          application_type: 'initial',
          protected_ground: 'true',
        },
        {
          primary_key: 13,
          user_id: '00ulzdrizE2yzxToH5d6',
          case_id: 'A076-593-027',
          case_url: '2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          judge: 7,
          initial_or_appellate: true,
          nation_of_origin: 'Mexico',
          case_origin: 'Arlington, VA',
          hearing_date: '12-14-2012',
          applicant_perceived_credibility: false,
          applicant_access_to_interpreter: true,
          applicant_indigenous_group: 'Not Applicable',
          applicant_language: 'Spanish',
          case_filed_within_one_year: false,
          case_outcome: 'Remanded',
          applicant_gender: 'Female',
          type_of_violence_experienced: 'Not Applicable',
          application_type: 'initial',
          protected_ground: 'true',
        },
        {
          primary_key: 14,
          user_id: '00ulzdrizE2yzxToH5d6',
          case_id: 'A027-824-163',
          case_url: '2ff54195-ce30-456c-be63-2a6c765bdce2.pdf',
          judge: 8,
          initial_or_appellate: true,
          nation_of_origin: 'Jamaica',
          case_origin: 'New Orleans, LA',
          hearing_date: '5-30-2013',
          applicant_perceived_credibility: true,
          applicant_access_to_interpreter: true,
          applicant_indigenous_group: 'Not Applicable',
          applicant_language: 'English',
          case_filed_within_one_year: false,
          case_outcome: 'Remanded',
          applicant_gender: 'Female',
          type_of_violence_experienced: 'Not Applicable',
          application_type: 'initial',
          protected_ground: 'true',
        },
        {
          primary_key: 15,
          user_id: '00ulzcegtVucXsfdp5d6',
          case_id: 'A074-787-749',
          case_url: '70a5a7f0-a6eb-419b-8cfe-dec773762f3a.pdf',
          judge: 3,
          initial_or_appellate: true,
          nation_of_origin: 'Mexico',
          case_origin: 'Phoenix, AZ',
          hearing_date: '2-28-2013',
          applicant_perceived_credibility: false,
          applicant_access_to_interpreter: true,
          applicant_indigenous_group: 'Not Applicable',
          applicant_language: 'English',
          case_filed_within_one_year: true,
          case_outcome: 'Remanded',
          applicant_gender: 'Female',
          type_of_violence_experienced: 'Not Applicable',
          application_type: 'initial',
          protected_ground: 'true',
        },
      ]);
    });
};
