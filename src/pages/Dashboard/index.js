/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./styles.scss";
import githubMark from "../../assets/img/github-mark.png";
import illustration from "../../assets/img/illustration-empty.svg";
import { useDebounce } from "use-debounce";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { handleSearch } from "../../store/slices/thunk";

import Pagination from "../../components/Pagination";
import Card from "../../components/card";
import Input from "../../components/input";
import Select from "../../components/select";
import { resetApiData } from "../../store/slices";
import Skeleton from "../../components/skeleton";

function Dashboard() {
  const dispatch = useDispatch();
  const dropdownOptions = ["Users", "Repositories"];
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("Users");
  const [currentPage, setCurrentPage] = useState(1);
  const [debouncedValue] = useDebounce(inputValue, 500);

  const {
    githubReducer: { apiData, isLoading, mockEmpty },
  } = useSelector((state) => state, shallowEqual);
  const handleChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelectOption = (event) => {
    setSelectedOption(event.target.value);
    if (event?.target?.value && debouncedValue) {
      dispatch(
        handleSearch({
          payload: debouncedValue,
          page: 1,
          type: event.target.value,
        })
      );
    } else {
      dispatch(resetApiData());
    }
  };

  useEffect(() => {
    if (debouncedValue) {
      dispatch(
        handleSearch({
          payload: debouncedValue,
          page: currentPage,
          type: selectedOption,
        })
      );
    } else {
      dispatch(resetApiData());
    }
  }, [dispatch, currentPage]);

  useEffect(() => {
    if (debouncedValue) {
      dispatch(
        handleSearch({ payload: debouncedValue, page: 1, type: selectedOption })
      );
      setCurrentPage(1);
    } else {
      dispatch(resetApiData());
    }
  }, [dispatch, debouncedValue]);

  return (
    <div className="p-dashboard">
      <div className="header">
        <div className="img-container">
          <img src={githubMark} alt="logo" />
        </div>
        <div className="header-content">
          <div className="h1">Github Searcher</div>
          <div className="h2">Searcher users or repositories below</div>
        </div>
      </div>
      <div className="searchContainer">
        <Input value={inputValue} handleChangeInput={handleChangeInput} />
        <Select
          selectedOption={selectedOption}
          handleSelectOption={handleSelectOption}
          dropdownOptions={dropdownOptions}
        >
          {dropdownOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </div>
      <div className="content">
        {isLoading ? (
          mockEmpty.map(() => <Skeleton />)
        ) : apiData?.items?.length > 0 ? (
          apiData?.items?.map((item, key) => <Card item={item} key={key} />)
        ) : (
          <div className="empty-container">
            <div className="ilustration">
              <img src={illustration} alt="logo" />
            </div>
          </div>
        )}
      </div>
      <div className="pagination">
        {!isLoading && (
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={apiData?.total_count || 0}
            pageSize={9}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
