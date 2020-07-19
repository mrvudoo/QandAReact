import React, { useEffect, useState } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { PrimaryButton } from './Styles';
import { QuestionList } from './QuestionList';
import { getUnansweredQuestions, QuestionData } from './QuestionsData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';

export const HomePage = () => {
  const [questions, setQuestions] = useState<QuestionData[]|null>(null);
  const [questionsLoading, setQuestionsLoading] = useState(true);

  useEffect(() => {
    const doGetUnanweredQuestions = async () => {
      console.log('getting unanswered questions...');
      const unansweredQuestions = await getUnansweredQuestions();
    };
    doGetUnanweredQuestions();
  }, []);
  
  const handleAskQuestionClick = () => {
    console.log('TODO - move to AskPage');
  };

  return (
    <Page>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <PageTitle>Unanswered Questions</PageTitle>
        <PrimaryButton onClick={handleAskQuestionClick}>
          Ask a question
        </PrimaryButton>
      </div>
      {questionsLoading ? (
        <div
          css={css`
            font-size: 16px;
            font-style: italic;
          `}
        >
          Loading...
        </div>
      ) : (
        <QuestionList data={questions || []} />
      )}
    </Page>
  );
};
