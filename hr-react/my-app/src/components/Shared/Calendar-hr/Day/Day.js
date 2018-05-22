import React, { Component } from 'react';

class Day extends Component {

    handleClick = () => {
        let {date, isDisabled, onClick} = this.props;

        if (!isDisabled && typeof onClick === 'function') {
        onClick(parse(date));
        }
    };

    renderSelection(selectionColor) {
        const {
        day,
        date,
        isToday,
        locale: {todayLabel},
        monthShort,
        theme: {textColor},
        selectionStyle,
        } = this.props;

        return (
        <div
            className={styles.selection}
            data-date={date}
            style={{
            backgroundColor: this.selectionColor,
            color: textColor.active,
            ...selectionStyle,
            }}
        >
            <span className={styles.month}>
            {isToday ? todayLabel.short || todayLabel.long : monthShort}
            </span>
            <span className={styles.day}>{day}</span>
        </div>
        );
    }
    render() {

        const {
            className, 
            date,
            day,
            handlers,
            isDisabled,
            isHighlighted,
            isToday,
            isSelected,
            monthShort,
            theme: {selectionColor, todayColor},
            year,
            } = this.props;
            let color; 
            if (isSelected) {
            color = this.selectionColor = typeof selectionColor === 'function'
                ? selectionColor(date)
                : selectionColor;
            } else if (isToday) {
            color = todayColor;
        }

        return (
            <div>
                <li
                    style={color ? {color} : null}
                    className={classNames(styles.root, {
                    [styles.today]: isToday,
                    [styles.highlighted]: isHighlighted,
                    [styles.selected]: isSelected,
                    [styles.disabled]: isDisabled,
                    [styles.enabled]: !isDisabled,
                    }, className)}
                    onClick={this.handleClick}
                    data-date={date} 
                >
                    {isEvent &  events.map(function(event){
                        return <span className={event}></span>;
                    })}
                    {isToday ? <span>{day}</span> : day}
                    {isSelected && this.renderSelection()}
                </li>
            </div>
        );
    }
}

export default Day;