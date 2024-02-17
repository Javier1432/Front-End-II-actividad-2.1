-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-02-2024 a las 12:29:11
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `skyblue`
--
CREATE DATABASE IF NOT EXISTS `skyblue` DEFAULT CHARACTER SET utf32 COLLATE utf32_spanish_ci;
USE `skyblue`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) COLLATE utf32_spanish_ci NOT NULL,
  `descripcion` varchar(2000) COLLATE utf32_spanish_ci NOT NULL,
  `precio` varchar(200) COLLATE utf32_spanish_ci NOT NULL,
  `cantidad` int(11) NOT NULL,
  `imagen` varchar(2000) COLLATE utf32_spanish_ci NOT NULL,
  `categoria` varchar(200) COLLATE utf32_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `cantidad`, `imagen`, `categoria`) VALUES
(20, 'Iphone 13 Mini', 'Telefono economico para los ricos', '600', 12, '1708139448580-919456550-61ecgBYOAJL._AC_SL1500_.jpg', 'Mobile'),
(21, 'Tehcno Spak 10Pro', 'Mejor telefono para personas con poca capacidad adquisitiva\r\n', '120', 22, '1708139491876-801711371-Spark-10-Pro_.png', 'Mobile'),
(22, 'Lapto Gaming Asus', 'Equipo gamer de alta gama', '1500', 2, '1708139554577-755660999-underscored-best-tested-products-gaming-laptop-asus-rog-strix-g15-advantage-edition.jpeg', 'Computacion'),
(23, 'Lapto Gaming Acer Nitro', 'Equipo gamer de alta gama con un Intel Core i5 de 10ma Generacion', '1200', 5, '1708139603059-261582650-maxitec-acer-laptop-gaming-acer-nitro-core-i5-an515-55-506k-1.jpg', 'Computacion'),
(24, 'Lapto Gaming Under', 'Equipo gamer de gama media', '800', 10, '1708139626833-981794890-Gaming-Laptop-Under-50000.jpg', 'Computacion'),
(25, 'Lapto Gaming Rog', 'Equipo gamer de alta gama', '1250', 5, '1708139648718-862904000-811QpiYXe-L._AC_UF894,1000_QL80_.jpg', 'Computacion'),
(26, 'Licuadora', 'Para tu casa una licuadora oster', '10', 22, '1708139680562-143291713-Sin tÃ­tulo.jpeg', 'Electronica'),
(27, 'Lavadora Multifuncional', 'Lo mejor para que puedas optimizar tus horas de lavado de ropa\r\n', '125', 10, '1708139714792-160904028-1366_2000.jpg', 'Electronica'),
(28, 'TV de 55 Pulgadas', 'Televisor de alta definicion de 55 pulgadas\r\n', '250', 25, '1708139807412-765327311-images.jpeg', 'Electronica'),
(29, 'Xbox Series X', 'Consola de ultima generacion', '600', 15, '1708139908216-316583602-100129611.jpeg', 'Computacion'),
(30, 'Play Station 5', 'Consola de ultima generacion', '650', 30, '1708139927103-302689776-ps5-product-thumbnail-01-en-14sep21.jpeg', 'Computacion');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tokens`
--

DROP TABLE IF EXISTS `tokens`;
CREATE TABLE `tokens` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `token` varchar(500) COLLATE utf32_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

--
-- Volcado de datos para la tabla `tokens`
--

INSERT INTO `tokens` (`id`, `user_id`, `token`) VALUES
(1, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiamF2aWVyIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MDgwMDcxMDAsImV4cCI6MTcwODAxMDcwMH0.i6g7xXUjdpvTJVjFiWMt7b83FUfOHtLjPbi72FCXmrI'),
(2, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiamF2aWVyIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MDgwMTI1NzksImV4cCI6MTcwODAxNjE3OX0.PhzX2sXXgoNFJeCxDmjG1w50F1V-bwu3JoMjx-j2IGo'),
(3, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiamF2aWVyIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MDgwMTI4NjcsImV4cCI6MTcwODAxNjQ2N30.5mqL31_xbpqFoNmXG5PzkPPYI82HbZk4Dmj4riGzlKw'),
(4, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiamF2aWVyIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MDgwMTgwODIsImV4cCI6MTcwODAyMTY4Mn0.sgI-jwj4KMjjvUzTpoLJC7V3dBjIQJTxMn5B3AZoIsg'),
(5, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiamF2aWVyIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MDgwOTY1ODIsImV4cCI6MTcwODEwMDE4Mn0.rQ4fYtkpX4AkgqH5Zpv595YCfa4NIUJHSVOg2OobqcI'),
(6, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiamF2aWVyIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MDgwOTY2MzgsImV4cCI6MTcwODEwMDIzOH0.4kyv8TNN-aG1yx_AFi4AESJqQM7AZtPev3WU-tDXRQA'),
(7, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiamF2aWVyIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MDgwOTY3NTQsImV4cCI6MTcwODEwMDM1NH0.p77cGAAXDX8Xm8sWRtitZODKQijYPjVitledwdVrSwQ'),
(8, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiamF2aWVyIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MDgwOTY3ODcsImV4cCI6MTcwODEwMDM4N30.qGxLbD8KbAIFgW_WiZS_fXzpA7ziN3_lTYe7-H5_OTE'),
(9, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiamF2aWVyIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MDgwOTY5NjksImV4cCI6MTcwODEwMDU2OX0.V6vvJl5DESABW0NA0-XkyDTpKpNn4mlmuu7tR9RDMnk'),
(10, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiamF2aWVyIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MDgwOTcwMjcsImV4cCI6MTcwODEwMDYyN30.PCUoV7bIiqehGtoeMvIt4XwIo5Zzu0AihKMd_luCAmU'),
(11, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiamF2aWVyIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MDgwOTczNDksImV4cCI6MTcwODEwMDk0OX0.0MAytQyB4gHNka8A_F1ohoXHLopa6Oi7INdoigH_g8w'),
(12, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiamF2aWVyIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MDgwOTczODksImV4cCI6MTcwODEwMDk4OX0.nZu9ff4wAM6FhxGYbjjyEo0tcQEYSjh0eXDWZ9oSB5E'),
(13, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MDk4NjM0LCJleHAiOjE3MDgxMDIyMzR9.Y7A-xBbGz4uTfqEwoaNThCFPMlRt86RegSNQzLu0zGA'),
(14, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MDk5NDYyLCJleHAiOjE3MDgxMDMwNjJ9.PH6rqOEzDplyr3fgRacpTt-gDVudjsbVsGbnf24R3Wo'),
(15, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MDk5NTg4LCJleHAiOjE3MDgxMDMxODh9.w2Nn3rNIgJ3sPiKImeNioQglG3norJqeq4FpMKu7I7s'),
(16, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MDk5ODM1LCJleHAiOjE3MDgxMDM0MzV9.wpeHcv8lOIsOFFm96VgG3QcFiRbL_V5iHJyWOaWTf90'),
(19, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTAwNTMxLCJleHAiOjE3MDgxMDQxMzF9.wZmAj0bZZQPIWQ4fNJ-_DgqVM_eiJ14eY-MdsZTSS_A'),
(20, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTAxNDg5LCJleHAiOjE3MDgxMDUwODl9.2Q00DDrytrZSNcVgfAxjJoMIvYtDxf7Z68RYgfmCtP8'),
(21, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTAyMzE2LCJleHAiOjE3MDgxMDU5MTZ9.fSz8v99rupNwdLU9RVhHWPXODE1KaONYrmRdy43Pu3k'),
(22, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTAyOTUwLCJleHAiOjE3MDgxMDY1NTB9.MVWfqIadyQEQ6A6sKt8Un5I_4ETE6JgaVXijywZphnQ'),
(23, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTAzMDU4LCJleHAiOjE3MDgxMDY2NTh9._LzieAWwCTvf6Fi64Ik-BlyqyjRdTDcMUu6j9A6iSoI'),
(24, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTAzOTA5LCJleHAiOjE3MDgxMDc1MDl9.tJ9IGjU0SmCR684Onq9HdyfnTeNAxw3994j42SfzUp0'),
(25, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTA0NDExLCJleHAiOjE3MDgxMDgwMTF9.uWhfLkGyCrBIx6qE_oyXlpeEmk9FZCr1mIxSVyZsd9w'),
(26, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTA0NTMxLCJleHAiOjE3MDgxMDgxMzF9.gEIns2WLFSUKA6FjgZYojHGe0uH9rj-0NwEtQ64ARl4'),
(27, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTA0NTc2LCJleHAiOjE3MDgxMDgxNzZ9.SNfo3hf7yTmlqoSrAge45vuBg9J6SH59EOXr7qpUu7Y'),
(28, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTA1MTk3LCJleHAiOjE3MDgxMDg3OTd9.wf_IscVAgCZpAZJm486PqM1knI5nErD_9GA2z-14cmA'),
(29, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTA1NDk2LCJleHAiOjE3MDgxMDkwOTZ9.T0GH6igHtFdDOx65Mk0-yr6NQ5aIRhOB-_ApCTL63e4'),
(30, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTA1ODMyLCJleHAiOjE3MDgxMDk0MzJ9.j4xhlBSkwqtGOYn2FdSQ3n6EgGPHSwI4ue7hly3GNM0'),
(31, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTA2NDkwLCJleHAiOjE3MDgxMTAwOTB9.6MhVgu7LNwqoXn-4-N0lSxcQeavpADTrM33hJ696uFY'),
(32, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTA2Njk1LCJleHAiOjE3MDgxMTAyOTV9.nyk2WHgMo9CcEnJHUYrWwcExjYzm38haB-_vKSm6BQU'),
(33, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTA2NzU4LCJleHAiOjE3MDgxMTAzNTh9.WEMDRRM-puAuw8CyW_yYOspBpK7fCDk33i3-1pxT_nQ'),
(34, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTA2ODc0LCJleHAiOjE3MDgxMTA0NzR9.ab9z8OwF9X6KL5TgdX0MAH4DhZd5lhA73p9GDmgeyAM'),
(35, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTA3MDE4LCJleHAiOjE3MDgxMTA2MTh9.g6DBkgpuTqY3fHUOnnJQDqx5DeQFu7lUhM9xlSNy0mY'),
(36, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTA3MjQxLCJleHAiOjE3MDgxMTA4NDF9.IM1jK9IOQxfBfo5xERe8RZWZSEpay0_KarsiM6-udOE'),
(37, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTA3MzYzLCJleHAiOjE3MDgxMTA5NjN9.KLBITuYkMf6HE_YDCM3KPLZrdh7tPYQqn8zq4stYsXI'),
(38, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTA3NTYyLCJleHAiOjE3MDgxMTExNjJ9.5SCy451hCQNVgu45h_Me2vW1stZ3EEWymeTYf95bI-I'),
(39, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTA4NTY4LCJleHAiOjE3MDgxMTIxNjh9._9v9KQb8bLb2PcS2Chn6f_86_WncSJyks0BPsHbbIL0'),
(40, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTA4NjQxLCJleHAiOjE3MDgxMTIyNDF9.2wKOSUvicJR8UEEc9ALZTdd2lkN--_CIih0MBGlxt_s'),
(41, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTA4Nzc3LCJleHAiOjE3MDgxMTIzNzd9.qNrIRFUQiFdqwhJGwsVg0wk-ULYkQYM8MEXTwQFTfEs'),
(42, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTI2NDM0LCJleHAiOjE3MDgxMzAwMzR9.b1Npv3ZoH-tUdA6DH65sn2LFScpt-e7wTy5H19SJll0'),
(43, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTI2NDg1LCJleHAiOjE3MDgxMzAwODV9.Sv9EA69qUVPabXXVBVzwYbRDnx1QWHzVTW5QkZHX1Qk'),
(44, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTI2NTI4LCJleHAiOjE3MDgxMzAxMjh9.VpXizVhrzdH5u1ja5-knLoh0b4AKiLZM0rQvBTQpi0o'),
(45, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTI2NzM2LCJleHAiOjE3MDgxMzAzMzZ9.BkRn0jiFGGg6K1__pahzQwab9Pk7H-mHI0himi6oSYg'),
(46, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTI2Nzk5LCJleHAiOjE3MDgxMzAzOTl9.65VmJqprz_m_swjau8CuBQdqeXnF5sTb4tWRruN7xxk'),
(47, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTI3MjIzLCJleHAiOjE3MDgxMzA4MjN9.REbpuAMNDDlfeSeaXkWlhiZHzWR9_P6ZZpbWFTt1S10'),
(48, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTI3MjU1LCJleHAiOjE3MDgxMzA4NTV9.JrAI64FIHBKb7OU1GuBpfRGbrjcEB9yfuii8hCSb65A'),
(49, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTI3MzI0LCJleHAiOjE3MDgxMzA5MjR9.q77aMS_SZ1-OYeJn99Aci-v0SkYW4sl_JBonjPmCuDU'),
(50, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTI3MzUzLCJleHAiOjE3MDgxMzA5NTN9.41ANauzXlKvnl5ztmstMx_gXQye9UaOGyTtikgZ0upU'),
(51, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTI3OTM0LCJleHAiOjE3MDgxMzE1MzR9.ZBK6e2w4Q-9T84Sohi078rVH0Gmfm1KwesbsGQMyh4c'),
(52, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTI3OTc1LCJleHAiOjE3MDgxMzE1NzV9.ca7FH0QXCO3YaGxTfHQENHW4IpIe3w0aZGoihmA71aA'),
(53, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTI4MDIyLCJleHAiOjE3MDgxMzE2MjJ9.6FF-dgk6Zo4Y7geG5Fc2b5NfIBe4RnL6y4sSCL8FTeI'),
(54, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTI4MDYzLCJleHAiOjE3MDgxMzE2NjN9.jpVnNweslgXKOqDQBvI0_Qh1LdP0p2OKcYm1bIfZ7l0'),
(55, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTI4MTI0LCJleHAiOjE3MDgxMzE3MjR9.Dl-NXgMAcjQvSFMkRZdIhPkTPoe2juIwEmFqUdQDVec'),
(56, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTI4MjA1LCJleHAiOjE3MDgxMzE4MDV9.JuT8Yf39ynseC4ZXKU1_Z0xUb8AFS89PIFqRv_a0_88'),
(57, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTI4MjIzLCJleHAiOjE3MDgxMzE4MjN9.1FZwkhfzQ6A7jXRlqesW1I_7z2X0B_kWbXBw4IoL-Y8'),
(58, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTI4Mzg5LCJleHAiOjE3MDgxMzE5ODl9.UxpvhmAl1k_AJVcbZ-41r6ZMNGqplFuw26aSetBDuHI'),
(59, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTI4NDY1LCJleHAiOjE3MDgxMzIwNjV9.Qc2umEDLlF63jRin-ErGNe7QizCw5RLQyRVmeeC-mTY'),
(60, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTI4NTQ1LCJleHAiOjE3MDgxMzIxNDV9.T-uU0UQOesFZcX-7HTgIUiqqBqJhpRBNt7UXvTilHqw'),
(61, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTI4Nzg2LCJleHAiOjE3MDgxMzIzODZ9.1JS1E2xaqy-KXQeFcgcwW2ynNCET1jEwES-OnD9CUGk'),
(62, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTI4OTU4LCJleHAiOjE3MDgxMzI1NTh9.jY7nkJ3VjovuO1kwKX3AvMlMR8-NPBqECxKHB8-nx8c'),
(64, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTI5MTQxLCJleHAiOjE3MDgxMzI3NDF9.Z9_NcsPKQ0vbitGsIdEn5UsACs7-XjZ-Kt67HYnQ3XE'),
(65, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTI5NjY2LCJleHAiOjE3MDgxMzMyNjZ9.XuZ3WY5ufijcxgj4s_ux5Vu7DovoCrRMfTuuwdg12eg'),
(66, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTI5NzQ3LCJleHAiOjE3MDgxMzMzNDd9.A3loz2tGev6aFwQdDwm2xwcbbtRi_gh5b0OhcB4-AbQ'),
(67, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTI5NzY5LCJleHAiOjE3MDgxMzMzNjl9.dI_Lbct_Y8oYsH1pbLs2d_U4Rop0bEAO1mRExIK4q9o'),
(68, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTI5OTA0LCJleHAiOjE3MDgxMzM1MDR9.QoWuP5Vd_TA3dNodPbRWCuBt4QsG7U0nfipPE01qQw8'),
(69, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTMwMTc1LCJleHAiOjE3MDgxMzM3NzV9.4A7q22BbvjnzsF8bkp53VCVLjXSAp0aajHDbRJr2gLA'),
(70, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4MTMwMjAxLCJleHAiOjE3MDgxMzM4MDF9.ZVj87c7EP3VXEuXjtn6wRA6v8SBpcfiAhk4LWUoyhOo'),
(71, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwODEzMDQ5NiwiZXhwIjoxNzA4MTM0MDk2fQ.UmuLwNcuD0LTnRBirMXP61rs-q114XAp0JrcHJg3xxw'),
(72, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwODEzMDU2NiwiZXhwIjoxNzA4MTM0MTY2fQ.nfoLDfthx2sEbYL37ltcoTGup3AOh-0pxr-aROrQIec'),
(73, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwODEzMDYxOSwiZXhwIjoxNzA4MTM0MjE5fQ.KajsXCjE61UhzzKPXuSFV6SO-BSjveuugx8InJdBSBI'),
(74, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwODEzMDc3OCwiZXhwIjoxNzA4MTM0Mzc4fQ.Sg-rFvQ7Oz1hQk8OUxvgASCEWWnQhEGGAOogF0SAxk8'),
(75, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwODEzMTA4OSwiZXhwIjoxNzA4MTM0Njg5fQ.U4HX1E3E8HUMT1LIHLtIjK4_Z86aUje6HqVbLvZ0nmI'),
(76, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoiamF2aWVyIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MDgxMzEwOTcsImV4cCI6MTcwODEzNDY5N30.1YHNMGnMz-c6vvpZgYXMNGLfYdf1iOTGMC8q3XBawXg'),
(77, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwODEzMTM4NSwiZXhwIjoxNzA4MTM0OTg1fQ.0XElVDVv5rxdhN_Mx60Bp5x2NerXaxyQqpznCYpk7Zs'),
(78, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwODEzMTQwNCwiZXhwIjoxNzA4MTM1MDA0fQ.P0i94nulCVu04PMhCGF4q8UJjat1Gr8Rz5hjF5JS2sg'),
(79, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwODEzMTU1MCwiZXhwIjoxNzA4MTM1MTUwfQ.mPG43qRVR6o2n0MALtn5gmyypl-05KCiXPkv5QFqFnc'),
(80, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwODEzMTcyMywiZXhwIjoxNzA4MTM1MzIzfQ.Q-dbDBFk7XTTLgRSnJanqrpZNyFS_KfF9r9JmjRAbUs'),
(86, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwODEzNDE1MCwiZXhwIjoxNzA4MTM3NzUwfQ._3uTqi8RlDqhqkSRQ-yzcwL6HpptPjLo5hGz7HYrAL0'),
(87, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwODEzNTM4MiwiZXhwIjoxNzA4MTM4OTgyfQ.AwF4VTp5GBJh-bOxM817myaQ3b-l45EC40VRSF1qwuY'),
(88, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiYXllciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcwODEzNTQ0MCwiZXhwIjoxNzA4MTM5MDQwfQ.qtw4-UXrSlezUeqAoEMexXW5ubx4Em8TU7YS8E9y1MM'),
(91, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXJuYW1lIjoiQWRtaW4iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDgxMzkwNTcsImV4cCI6MTcwODE0MjY1N30.QzDNrFdsptNhNz02NWCSndkmx09taXEzcuCwDj0l4DI');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) COLLATE utf32_spanish_ci NOT NULL,
  `password` varchar(250) COLLATE utf32_spanish_ci NOT NULL,
  `role` enum('admin','user') COLLATE utf32_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`) VALUES
(1, 'Javier', '$2b$10$18xkeCCf868ISWHguwKgzux6G7NX8.aj5dropvmWONHJCi4rgGuFG', 'user'),
(2, 'Admin', '$2b$10$.xwnl7wx/Z9Y.PXPZUIeUu9CVrG73txPr.pu8WNlu0sp2j4PAxyLy', 'admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tokens_ibfk_1` (`user_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `tokens`
--
ALTER TABLE `tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tokens`
--
ALTER TABLE `tokens`
  ADD CONSTRAINT `tokens_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
