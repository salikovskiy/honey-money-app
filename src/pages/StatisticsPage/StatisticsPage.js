import React, { Component } from 'react';
import s from './StatisticsPage.module.css';
import StatisticsMenu from '../../components/statisticsMenu/StatisticsMenu';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import moment from 'moment';

class StatisticsPage extends Component {
  state = {
    // Хранить в стейте какая именно категория
    // выбрана и текущуюю дату (по ней определяется месяц)
    selectedCategory: '',
    currentDate: '',
  };

  componentDidMount() {
    // GET запросы:
    // 1) получение данных по категриям;
    // Получить из стора:
    // 2) получение данных по доходам;
    // 3) получение данных по расходам;
    // Полученные данные записать в стор.
  }

  // Написать операцию (ГЕТ запрос) с измененным
  // месяцем и текущей категорией в стейте и прокинуть
  // в StatisticsMenu на переключение месяцев

  componentDidUpdate() {
    // Из текущего массива расходов, формирует каждый
    // раз в componentDidUpdate объект категории и
    // суммарной сумме по данной категории и передает
    // его пропом в ChartStatisticByCategory для
    // отображения  (формат объекта согласовать с тем
    //   кто будет делать ChartStatisticByCategory)
  }

  render() {
    // Компонент рендерит: StatisticMenu, StatisticAmounts,
    // CategoriesList, Chart
    return (
      <div className={s.wrapper}>
        <div className={s.header}>Header</div>
        <StatisticsMenu />
        <div className={s.statistic_amounts}>StatisticAmounts</div>
        <CategoriesList />
        <div className={s.chart}>Chart</div>
      </div>
    );
  }
}

export default StatisticsPage;
