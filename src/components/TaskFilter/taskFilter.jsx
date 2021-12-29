/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useCallback } from 'react';
import Input from 'components/base/Input/input';
import Select from 'components/base/Select/select';
import TaskStatusFilter from 'components/TaskStatusFilter/taskStatusFilter';
import PropTypes from 'prop-types';

import './taskFilter.css';


function TaskFilter({ filter, setFilter }) {
    const onInputChange = useCallback(event => setFilter({ ...filter, searchQuery: event.target.value }), [filter]);
    const onFilterChange = useCallback(event => setFilter({ ...filter, selectedSort: event.target.value }), [filter]);

    return (
        <div className="task__filter-container">
            <hr className="task__filter-separator" />
            <Input
                value={filter.searchQuery}
                placeholder="search for..."
                onChange={onInputChange}
            />
            <div className="task__filter-select-section">
                <Select
                    value={filter.selectedSort}
                    defaultValue="Sort by"
                    options={
                        [
                            { value: 'title', name: 'by name' },
                            { value: 'body', name: 'by description' }
                        ]
                    }
                    onChange={onFilterChange}
                />
                <TaskStatusFilter />
            </div>
            <hr className="task__filter-separator" />
        </div>
    );
}

TaskFilter.propTypes = {
    filter: PropTypes.object,
    setFilter: PropTypes.func
};

export default TaskFilter;
