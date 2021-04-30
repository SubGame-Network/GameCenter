import React from "react";
import ActionButton from "../Button/ActionButton";
import { IconSharpArrowleft, IconSharpArrowright } from "react-icon-guanfan";
import styled from "styled-components";
import useAppContext from "../../hooks/useAppContext";

interface PageButtonGroupProps {
  totalPages: number;
  currentPage: number;
  pageNeighbours: number;
  previousPageFunc: () => void;
  nextPageFunc: () => void;
  gotoPageFunc: (targetPage: number) => void;
}

function PageButtonGroup({
  totalPages,
  currentPage,
  pageNeighbours,
  previousPageFunc,
  nextPageFunc,
  gotoPageFunc,
}: PageButtonGroupProps) {
  const { isWhiteMode } = useAppContext();

  const range = (from: number, to: number, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
      range.push(i);
      i += step;
    }

    return range;
  };

  const fetchPageNumbers = () => {
    const LEFT_PAGE = "LEFT";
    const RIGHT_PAGE = "RIGHT";

    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

      let pages: (number | string)[] = range(startPage, endPage);

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }
      return [1, ...pages, totalPages];
    }
    return range(1, totalPages);
  };

  const nowPageCount = fetchPageNumbers();

  const buttonsArray: JSX.Element[] = [];
  nowPageCount.forEach((page: any, index: number) => {
    if (page === "LEFT") {
      buttonsArray.push(
        <button
          key={index}
          onClick={() => previousPageFunc()}
          disabled={currentPage <= 1 && true}
        >
          …
        </button>
      );
    } else if (page === "RIGHT") {
      buttonsArray.push(
        <button
          key={index}
          onClick={() => nextPageFunc()}
          disabled={currentPage >= totalPages && true}
        >
          …
        </button>
      );
    } else {
      buttonsArray.push(
        <button
          className={currentPage === page ? "active" : ""}
          key={index}
          onClick={() => {
            gotoPageFunc(page - 1);
          }}
        >
          {page}
        </button>
      );
    }
  });

  return (
    <PageButtonGroupStyle isWhiteMode={isWhiteMode}>
      <ActionButton
        onClick={() => previousPageFunc()}
        disabled={currentPage <= 1 && true}
        className="left"
        icon={<IconSharpArrowleft fontSize={20} />}
      />{" "}
      <p>
        {currentPage} / {totalPages}
      </p>
      <ActionButton
        onClick={() => nextPageFunc()}
        disabled={currentPage >= totalPages && true}
        className="right"
        icon={<IconSharpArrowright fontSize={20} />}
      />
    </PageButtonGroupStyle>
  );
}
const PageButtonGroupStyle = styled.div<{ isWhiteMode: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  border-radius: 0 0 20px 20px;
  p {
    margin: 0 20px;
    color: ${({ isWhiteMode, theme }) =>
      isWhiteMode ? theme.Secondary_Black : "#fff"};
  }
`;

export default PageButtonGroup;
