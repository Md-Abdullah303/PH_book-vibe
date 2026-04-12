import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import HomePage from "../Components/Pages/HomePage/HomePage";
import BooksPage from "../Components/Pages/BooksPage/BooksPage";
import PagesToRead from "../Components/Pages/PagesToRead/PagesToRead";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            { index: true, Component: HomePage },
            { path: '/home', Component: HomePage },
            { path: '/books', Component: BooksPage },
            { path: '/pagesToRead', Component: PagesToRead },
            {
                path: '/booksDetails',
                element: 'booksDetails'
            }
        ]
    },

])