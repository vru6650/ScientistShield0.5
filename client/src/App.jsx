import { Suspense, lazy } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import AppShell from './components/layout/AppShell.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute.jsx';

// Lazy-loaded page components
const Home = lazy(() => import('./pages/Home.jsx'));
const Dashboard = lazy(() => import('./pages/Dashboard.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));
const Tutorials = lazy(() => import('./pages/Tutorials.jsx'));
const SingleTutorialPage = lazy(() => import('./pages/SingleTutorialPage.jsx'));
const CreateTutorial = lazy(() => import('./pages/CreateTutorial.jsx'));
const UpdateTutorial = lazy(() => import('./pages/UpdateTutorial.jsx'));
const Quizzes = lazy(() => import('./pages/Quizzes.jsx'));
const SingleQuizPage = lazy(() => import('./pages/SingleQuizPage.jsx'));
const CreateQuiz = lazy(() => import('./pages/CreateQuiz.jsx'));
const UpdateQuiz = lazy(() => import('./pages/UpdateQuiz.jsx'));
const CreatePost = lazy(() => import('./pages/CreatePost.jsx'));
const UpdatePost = lazy(() => import('./pages/UpdatePost.jsx'));
const PostPage = lazy(() => import('./pages/PostPage.jsx'));
const PostListPage = lazy(() => import('./pages/PostListPage.jsx'));
const Search = lazy(() => import('./pages/Search.jsx'));
const SignIn = lazy(() => import('./pages/SignIn.jsx'));
const SignUp = lazy(() => import('./pages/SignUp.jsx'));
const TryItPage = lazy(() => import('./pages/TryItPage.jsx'));
const CodeVisualizer = lazy(() => import('./pages/CodeVisualizer.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

export default function App() {
  return (
    <AppShell>
      <Suspense fallback={<div className="p-4">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/search" element={<Search />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/posts" element={<PostListPage />} />
          <Route path="/post/:postSlug" element={<PostPage />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/tutorials/:tutorialSlug/:chapterSlug?" element={<SingleTutorialPage />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/quizzes/:quizSlug" element={<SingleQuizPage />} />
          <Route path="/tryit" element={<TryItPage />} />
          <Route path="/visualizer" element={<CodeVisualizer />} />

          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route element={<OnlyAdminPrivateRoute />}>
              <Route path="/create-post" element={<CreatePost />} />
              <Route path="/update-post/:postId" element={<UpdatePost />} />
              <Route path="/create-tutorial" element={<CreateTutorial />} />
              <Route path="/update-tutorial/:tutorialId" element={<UpdateTutorial />} />
              <Route path="/create-quiz" element={<CreateQuiz />} />
              <Route path="/update-quiz/:quizId" element={<UpdateQuiz />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AppShell>
  );
}
