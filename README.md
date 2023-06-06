# FPMI - Python (блок 3)

## Содержание
- [Предварительные требования](#Требования)
- [Установка](#Установка)
- [Запуск](#Запуск)
- [Работа с приложением](#Работа-с-приложением)

## Требования

Установите следующие пакеты:

1. [Python 3.10.5](https://www.python.org/downloads/)
2. [Node.js 18.6.0](https://nodejs.org/en/)
3. [PostgreSQL 14.4](https://www.postgresql.org/download/)
4. [Visual Studio Code](https://code.visualstudio.com/download)

## Установка

### Backend

#### 1. Создание виртуального окружения

Из **root** директории запустите:

```bash
cd backend
```
```bash
python -m venv venv
```

#### 2. Активируйте виртуальное окружение

Из **backend** директории запустите:

```bash
venv\scripts\activate
```

#### 3. Установите необходимые зависимости

Из **backend** директории запустите:

```bash
pip install -r requirements.txt
```

#### 4. Настройте PostgreSQL 


Запустите **psql**, при помощи команды:

```bash
psql postgres
```

Создайте PostgreSQL базу данных:

```sql
CREATE DATABASE portfolio;
```

Создайте пользователя-администратора:

```sql
CREATE USER yourusername WITH SUPERUSER PASSWORD 'yourpassword';
```

Для выхода **psql**, введите:

```bash
\q
```

#### 5. Настройте backend окружение

Из **backend** директории запустите:

```bash
touch config/.env
```

Добавьте следующие строки:

```bash
SECRET_KEY=yoursecretkey
DEBUG=TRUE
DATABASE_NAME=portfolio
DATABASE_USER=yourusername
DATABASE_PASS=yourpassword
DATABASE_HOST=localhost
FRONTEND_URL=http://localhost:3000
```

#### 6. Запустите миграцию

Из **backend** директории запустите:

```bash
python manage.py makemigrations
```
```bash
python manage.py migrate
```

#### 7. Созадйте пользователя для доступка к админке

Из **backend** директории запустите:

```bash
python manage.py createsuperuser
```

Введите username, email, и пароль.

### Frontend

#### 1. Установите необходимые зависимости

Из **root** директории запустите:

```bash
cd frontend
```
```bash
npm install
```

#### 2. Настройте переменные окружения

Из **frontend** директории запустите:

```bash
touch .env
```

Добавьте следующие строки:

```bash
BACKEND_HOST=127.0.0.1
BACKEND_URL=http://127.0.0.1:8000
```

## Запус приложения

Для запуска необходимо запустить и frontend и backend скрипты.

#### 1. Запуск backend

Из **backend** директории запустите:

```bash
python manage.py runserver
```

#### 2. Запуск frontend

Из **frontend** директории запустите:

```bash
npm run dev
```

#### 3. Перейдите на страницу приложения

Пройдите по ссылке http://localhost:3000/ 


## Работа с приложением

Работа с приложением.

Перейдите в админку http://127.0.0.1:8000/admin используя созданные имя и пароль в пункте 7.

