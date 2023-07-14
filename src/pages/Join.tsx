import React from "react";
import styles from "./styles.module.css";

const Join: React.FC = () => {
  return (
    <div className={styles.Join}>
      <div className={styles.leftSide}>
        <header className={styles.header}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <circle cx="20" cy="20" r="20" fill="#175EF1" />
            <circle cx="20" cy="19.9998" r="10" fill="black" />
            <path
              d="M24 27.4998C24 26.119 25.1193 24.9998 26.5 24.9998V24.9998C27.8807 24.9998 29 26.119 29 27.4998V27.4998C29 28.8805 27.8807 29.9998 26.5 29.9998V29.9998C25.1193 29.9998 24 28.8805 24 27.4998V27.4998Z"
              fill="white"
            />
            <rect
              x="10"
              y="10.9998"
              width="5"
              height="5"
              rx="2.5"
              fill="white"
            />
          </svg>
          <div className={styles.titleApp}>Сетевой учебный класс</div>
          <button className={styles.enterAccount}>Войти</button>
        </header>
        <main className={styles.main}>
          <div className={styles.titleMotivation}>Учиться стало еще проще!</div>
          <div className={styles.textMotivation}>
            Комфортная видеосвязь, качественное проведение уроков, контроль
            выполнения заданий – всё это и не только в одном приложении!
          </div>
          <form
            action="#"
            method="get"
            autoComplete="on"
            className={styles.formEnter}
          >
            <input type="text" name="link" placeholder="Ссылка на класс" />
            <button type="submit">Присоединиться</button>
          </form>
          <div className={styles.functions}>
            <a href="/lobby" className={styles.function}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <rect
                  x="16"
                  y="2"
                  width="2"
                  height="30"
                  rx="1"
                  fill="#C5CCD5"
                />
                <path
                  d="M3 18C2.44772 18 2 17.5523 2 17C2 16.4477 2.44772 16 3 16H31C31.5523 16 32 16.4477 32 17C32 17.5523 31.5523 18 31 18H3Z"
                  fill="#C5CCD5"
                />
              </svg>
              <div className={styles.titleFunction}>Новый класс</div>
              <div className={styles.descriptionFunction}>
                Создать свой класс и провести занятие онлайн
              </div>
            </a>
            <a href="/lobby" className={styles.function}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M13.129 24.4997C19.2754 24.4997 24.258 19.5171 24.258 13.3707C24.258 7.22432 19.2754 2.2417 13.129 2.2417C6.98262 2.2417 2 7.22432 2 13.3707C2 19.5171 6.98262 24.4997 13.129 24.4997Z"
                  stroke="#C5CCD5"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M32 31.7579L22.4194 22.1772"
                  stroke="#C5CCD5"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className={styles.titleFunction}>Поиск</div>
              <div className={styles.descriptionFunction}>
                Найти класс и получить новые знания
              </div>
            </a>
            <div className={styles.function}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  d="M28.3183 19.0455C28.0456 18.7727 27.9092 18.3637 27.9092 17.9546C27.9092 17.6819 27.9092 17.2727 27.9092 17C27.9092 16.7273 27.9092 16.3182 27.9092 16.0455C27.9092 15.6364 28.0456 15.2273 28.3183 14.9545L30.6365 12.6364C31.0456 12.2273 31.1819 11.5454 30.9092 11L29.2728 8.13636C29.0001 7.59091 28.3183 7.31818 27.7728 7.45455L24.6365 8.40919C24.2274 8.54555 23.8183 8.40909 23.4092 8.13636C22.8637 7.72727 22.3183 7.45461 21.6365 7.18188C21.2274 7.04552 20.9546 6.63633 20.8183 6.22724L20.0001 3.09098C19.8637 2.54552 19.3183 2 18.6365 2H15.3637C14.6819 2 14.1365 2.40916 14.0001 3.09098L13.1819 6.22724C13.0456 6.63633 12.7728 6.90916 12.3637 7.18188C11.6819 7.45461 11.1365 7.86364 10.591 8.13636C10.1819 8.40909 9.77283 8.40919 9.36374 8.40919L6.22737 7.45455C5.68192 7.31818 5.0001 7.59091 4.72737 8.13636L3.09101 11C2.81828 11.5454 2.81828 12.2273 3.36373 12.6364L5.68192 14.9545C5.95464 15.2273 6.09101 15.6364 6.09101 16.0455C6.09101 16.3182 6.09101 16.7273 6.09101 17C6.09101 17.2727 6.09101 17.6819 6.09101 17.9546C6.09101 18.3637 5.95464 18.7727 5.68192 19.0455L3.36373 21.3637C2.95464 21.7728 2.81828 22.4546 3.09101 23L4.72737 25.8636C5.0001 26.4091 5.68192 26.6818 6.22737 26.5455L9.36374 25.591C9.77283 25.4546 10.1819 25.5909 10.591 25.8636C11.1365 26.2727 11.6819 26.5456 12.3637 26.8183C12.7728 26.9546 13.0456 27.3637 13.1819 27.7728L14.0001 30.9092C14.1365 31.4546 14.6819 32 15.3637 32H18.6365C19.3183 32 19.8637 31.591 20.0001 30.9092L20.8183 27.7728C20.9546 27.3637 21.2274 27.091 21.6365 26.8183C22.3183 26.5456 22.8637 26.1364 23.4092 25.8636C23.8183 25.5909 24.2274 25.591 24.6365 25.591L27.7728 26.5455C28.3183 26.6818 29.0001 26.4091 29.2728 25.8636L30.9092 23C31.1819 22.4546 31.1819 21.7728 30.6365 21.3637L28.3183 19.0455Z"
                  stroke="#C5CCD5"
                  stroke-width="1.8"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.0001 20.9548C19.2594 20.9548 21.091 19.1232 21.091 16.8639C21.091 14.6045 19.2594 12.7729 17.0001 12.7729C14.7407 12.7729 12.9092 14.6045 12.9092 16.8639C12.9092 19.1232 14.7407 20.9548 17.0001 20.9548Z"
                  stroke="#C5CCD5"
                  stroke-width="1.8"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className={styles.titleFunction}>Настройки</div>
              <div className={styles.descriptionFunction}>
                Редактировать свой профиль и классы
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.topPattern}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="461"
            height="126"
            viewBox="0 0 461 126"
            fill="none"
          >
            <path
              d="M461 123.081C417.794 124.578 372.621 128.111 330.01 118.814C306.841 113.759 283.399 105.948 261.813 95.7996C237.283 84.2676 218.962 67.6127 199.53 48.7808C170.498 20.645 129.755 1 89.7143 1C53.7019 1 25.4327 19.3943 1.00001 44.8944"
              stroke="url(#paint0_linear_309_257)"
              stroke-linecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_309_257"
                x1="241.39"
                y1="108"
                x2="246.682"
                y2="1.02816"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.195071" stop-color="white" stop-opacity="0.5" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className={styles.appearanceApp}>
          <div>
            <div className={styles.monitorIcon1}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="66"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
              >
                <path
                  d="M17.71 5.5H48.2625C58.0525 5.5 60.5 7.9475 60.5 17.71V35.1175C60.5 44.9075 58.0525 47.3275 48.29 47.3275H17.71C7.9475 47.355 5.5 44.9075 5.5 35.145V17.71C5.5 7.9475 7.9475 5.5 17.71 5.5Z"
                  stroke="white"
                  stroke-opacity="0.5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M33 47.355V60.5"
                  stroke="white"
                  stroke-opacity="0.5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.5 35.75H60.5"
                  stroke="white"
                  stroke-opacity="0.5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.625 60.5H45.375"
                  stroke="white"
                  stroke-opacity="0.5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className={styles.monitorIcon2}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="66"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
              >
                <path
                  d="M17.71 5.5H48.2625C58.0525 5.5 60.5 7.9475 60.5 17.71V35.1175C60.5 44.9075 58.0525 47.3275 48.29 47.3275H17.71C7.9475 47.355 5.5 44.9075 5.5 35.145V17.71C5.5 7.9475 7.9475 5.5 17.71 5.5Z"
                  stroke="white"
                  stroke-opacity="0.5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M33 47.355V60.5"
                  stroke="white"
                  stroke-opacity="0.5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.5 35.75H60.5"
                  stroke="white"
                  stroke-opacity="0.5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.625 60.5H45.375"
                  stroke="white"
                  stroke-opacity="0.5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className={styles.monitorIcon3}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="66"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
              >
                <path
                  d="M17.71 5.5H48.2625C58.0525 5.5 60.5 7.9475 60.5 17.71V35.1175C60.5 44.9075 58.0525 47.3275 48.29 47.3275H17.71C7.9475 47.355 5.5 44.9075 5.5 35.145V17.71C5.5 7.9475 7.9475 5.5 17.71 5.5Z"
                  stroke="white"
                  stroke-opacity="0.5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M33 47.355V60.5"
                  stroke="white"
                  stroke-opacity="0.5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.5 35.75H60.5"
                  stroke="white"
                  stroke-opacity="0.5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.625 60.5H45.375"
                  stroke="white"
                  stroke-opacity="0.5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className={styles.peopleIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="66"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
              >
                <path
                  d="M11 63.25C11 51.15 20.9 41.25 33 41.25C45.1 41.25 55 51.15 55 63.25"
                  stroke="white"
                  stroke-opacity="0.5"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M33 41.25C43.6315 41.25 52.25 32.6315 52.25 22C52.25 11.3685 43.6315 2.75 33 2.75C22.3685 2.75 13.75 11.3685 13.75 22C13.75 32.6315 22.3685 41.25 33 41.25Z"
                  stroke="white"
                  stroke-opacity="0.5"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.bottomPattern}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="461"
            height="99"
            viewBox="0 0 461 99"
            fill="none"
          >
            <path
              d="M1 2.501C44.2062 1.33005 89.3786 -1.43355 131.99 5.83929C155.159 9.79369 178.601 15.9037 200.187 23.8422C224.717 32.8633 243.038 45.8917 262.47 60.6231C291.502 82.6326 332.245 98 372.286 98C408.298 98 436.567 83.6109 461 63.6633"
              stroke="url(#paint0_linear_309_258)"
              stroke-linecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_309_258"
                x1="223.444"
                y1="-18.5564"
                x2="207.519"
                y2="74.7625"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.321459" stop-color="white" stop-opacity="0.5" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Join;
