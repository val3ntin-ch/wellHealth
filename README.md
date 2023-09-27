# Health & Wellness: Weight Loss Mobile App

Welcome to the repository for our Health & Wellness mobile application focusing on weight loss. This app offers features such as medication reminders, health metric tracking, and behavior modification strategies to aid users in their weight loss journey. The architecture is designed to scale and can be modified for other health treatment areas.

## Table of Contents

- [Features](#features)
- [Tech Stack & Tools](#tech-stack--tools)
- [Dependencies](#dependencies)
- [Storybook](#storybook)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Scripts](#scripts)
- [Development Lifecycle](#development-lifecycle)
  - [Continuous Integration (CI)](#continuous-integration-ci)
  - [Continuous Deployment (CD)](#continuous-deployment-cd)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Timed Notifications**: Users receive reminders to take medications.
- **Health Metrics Tracking**: Monitor and visualize weight and other wellness measures.
- **Goal Setting**: Users can set targets for weight loss and track their progress.
- **Behavior Change**: Tools and resources to help users modify habits for better health outcomes.

## Tech Stack & Tools

- **Front-end**: React Native with Redux for state management, React-Hook-Form for form handling, and Redux-Saga for side effects.
- **Alerts**: (Integrate your alert library here, e.g., `react-native-alerts`)
- **Navigation**: React Navigation with Tab Navigator for main app navigation and a stack navigator for the login and registration flow.
- **Continuous Integration**: GitHub Actions for automated builds and testing.
- **Continuous Deployment**: Fastlane for deploying to the App Store and Google Play Store.

## Dependencies

Our project uses a well-curated set of dependencies ensuring optimal performance, security, and speed in development. Here’s the list of libraries and tools that power our application:

### Main Dependencies

- `redux` and `react-redux` for state management.
- `redux-saga` for handling side effects.
- `react-hook-form` for efficient form handling.
- `@react-navigation/native`, `@react-navigation/bottom-tabs`, and `@react-navigation/stack` for navigation.
- `react-native-dropdownalert` and `react-native-flash-message` for alerts.
- `react-native-notifications` for managing notifications.
- `@react-native-async-storage/async-storage` for local storage.
- `axios` for HTTP requests.
- `styled-components` for styling.

### Development Dependencies

- Babel and related packages for transpiling JavaScript.
- ESLint for linting and Prettier for code formatting.
- Jest and React Testing Library for testing.
- TypeScript for static type checking.

## Storybook

We use Storybook to build, document, and isolate our component development. It serves as a playground to develop and test UI components in isolation from the app.

### Getting Started with Storybook

1. **Start Storybook**:

```bash
npm run storybook
```
