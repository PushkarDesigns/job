import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { CATEGORIES, JOB_TYPES } from "../../../utils/data";
import SalaryRangeSlider from "../../components/Input/SalaryRangeSlider";

const FilterSection = ({ title, children, isExpanded, onToggle }) => {
  return (
    <div className="">
      <button
        onClick={onToggle}
        className=""
      >
        {title}
        {isExpanded ? (
          <ChevronUp className="" />
        ) : (
          <ChevronDown className="" />
        )}
      </button>
    </div>
  );
};

const FilterContent = ({
  toggleSection,
  clearAllFilters,
  expandedSections,
  filters,
  handleFilterChange,
}) => {
  return <div>FilterContent</div>;
};

export default FilterContent;
