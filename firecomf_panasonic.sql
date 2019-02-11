-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 30/01/2019 às 18:11
-- Versão do servidor: 5.6.41
-- Versão do PHP: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `firecomf_panasonic`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `pesquisa`
--

CREATE TABLE `pesquisa` (
  `id` bigint(20) NOT NULL,
  `resposta1` varchar(255) NOT NULL,
  `resposta2` varchar(255) NOT NULL,
  `resposta3` varchar(255) NOT NULL,
  `resposta4` varchar(255) NOT NULL,
  `resposta5` varchar(255) NOT NULL,
  `resposta6` varchar(255) NOT NULL,
  `resposta7` varchar(255) NOT NULL,
  `resposta8` varchar(255) NOT NULL,
  `resposta9` varchar(255) NOT NULL,
  `resposta10` varchar(255) NOT NULL,
  `resposta11` varchar(255) NOT NULL,
  `resposta11a` varchar(255) DEFAULT NULL,
  `resposta12` varchar(255) NOT NULL,
  `resposta12a` varchar(255) NOT NULL,
  `resposta13` varchar(255) NOT NULL,
  `resposta13a` varchar(255) NOT NULL,
  `resposta14` varchar(255) NOT NULL,
  `resposta14a` varchar(255) NOT NULL,
  `resposta15` varchar(255) NOT NULL,
  `resposta15a` varchar(255) NOT NULL,
  `dt_insert` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Fazendo dump de dados para tabela `pesquisa`
--

INSERT INTO `pesquisa` (`id`, `resposta1`, `resposta2`, `resposta3`, `resposta4`, `resposta5`, `resposta6`, `resposta7`, `resposta8`, `resposta9`, `resposta10`, `resposta11`, `resposta11a`, `resposta12`, `resposta12a`, `resposta13`, `resposta13a`, `resposta14`, `resposta14a`, `resposta15`, `resposta15a`, `dt_insert`) VALUES
(1, '', '', '', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', '', 'undefined', '', '', 'undefined', '', 'undefined', '', 'undefined', '', 'NÃ£o', '2019-01-30 19:42:12'),
(2, 'Ã¡Ã©Ã­Ã³ÃºÃ£o', '', '', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', '', 'undefined', '', '', 'undefined', '', 'undefined', '', 'undefined', '', 'NÃ£o', '2019-01-30 19:43:29'),
(3, 'Ã¡Ã©Ã­Ã³ÃºÃ£o', '', '', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', '', 'undefined', '', '', 'undefined', '', 'undefined', '', 'undefined', '', 'NÃ£o', '2019-01-30 19:47:25'),
(4, 'Ã¡Ã©Ã­Ã³ÃºÃ£o', '', '', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', '', 'undefined', '', '', 'undefined', '', 'undefined', '', 'undefined', '', 'NÃ£o', '2019-01-30 19:58:50'),
(5, 'Ã¡Ã©Ã­Ã³ÃºÃ£o', '', '', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', '', 'undefined', '', '', 'undefined', '', 'undefined', '', 'undefined', '', 'NÃƒÂ£o', '2019-01-30 20:01:56'),
(6, 'Ã¡Ã£o', '', '', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', '', 'undefined', '', '', 'undefined', '', 'undefined', '', 'undefined', '', 'NÃ£o', '2019-01-30 20:05:52'),
(7, 'Ã¡Ã£o', '', '', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', '', 'undefined', '', '', 'undefined', '', 'undefined', '', 'undefined', '', 'NÃ£o', '2019-01-30 20:08:50'),
(8, 'Ã¡Ã£o', '', '', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', '', 'undefined', '', '', 'undefined', '', 'undefined', '', 'undefined', '', 'NÃ£o', '2019-01-30 20:11:05');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `pesquisa`
--
ALTER TABLE `pesquisa`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `pesquisa`
--
ALTER TABLE `pesquisa`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
