-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 13-Abr-2021 às 10:32
-- Versão do servidor: 10.3.25-MariaDB-0ubuntu0.20.04.1
-- versão do PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `feed_data`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `farmer_data`
--

CREATE TABLE `farmer_data` (
  `idfarmer_data` int(11) NOT NULL,
  `feedTime` datetime DEFAULT NULL,
  `totalDucks` int(11) DEFAULT NULL,
  `quantity` float DEFAULT NULL,
  `location_idlocation` int(11) NOT NULL,
  `food_idfood` int(11) NOT NULL,
  `kind_idkind` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `farmer_data`
--

INSERT INTO `farmer_data` (`idfarmer_data`, `feedTime`, `totalDucks`, `quantity`, `location_idlocation`, `food_idfood`, `kind_idkind`) VALUES
(1, '2021-04-13 09:30:00', 8, 5, 2, 1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `food`
--

CREATE TABLE `food` (
  `idfood` int(11) NOT NULL,
  `food` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `food`
--

INSERT INTO `food` (`idfood`, `food`) VALUES
(2, 'Bread'),
(3, 'Corn'),
(4, 'Oats'),
(1, 'Popcorn'),
(5, 'Rice');

-- --------------------------------------------------------

--
-- Estrutura da tabela `kind`
--

CREATE TABLE `kind` (
  `idkind` int(11) NOT NULL,
  `kind` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `kind`
--

INSERT INTO `kind` (`idkind`, `kind`) VALUES
(2, 'Industrialized'),
(1, 'Organic');

-- --------------------------------------------------------

--
-- Estrutura da tabela `location`
--

CREATE TABLE `location` (
  `idlocation` int(11) NOT NULL,
  `location` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `location`
--

INSERT INTO `location` (`idlocation`, `location`) VALUES
(2, 'Lakeshore'),
(1, 'Under the tree');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `farmer_data`
--
ALTER TABLE `farmer_data`
  ADD PRIMARY KEY (`idfarmer_data`),
  ADD UNIQUE KEY `idfarmer_data_UNIQUE` (`idfarmer_data`),
  ADD KEY `fk_farmer_data_location_idx` (`location_idlocation`),
  ADD KEY `fk_farmer_data_food1_idx` (`food_idfood`),
  ADD KEY `fk_farmer_data_kind1_idx` (`kind_idkind`);

--
-- Índices para tabela `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`idfood`),
  ADD UNIQUE KEY `idfood_UNIQUE` (`idfood`),
  ADD UNIQUE KEY `food_UNIQUE` (`food`);

--
-- Índices para tabela `kind`
--
ALTER TABLE `kind`
  ADD PRIMARY KEY (`idkind`),
  ADD UNIQUE KEY `idkind_UNIQUE` (`idkind`),
  ADD UNIQUE KEY `kind_UNIQUE` (`kind`);

--
-- Índices para tabela `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`idlocation`),
  ADD UNIQUE KEY `idlocation_UNIQUE` (`idlocation`),
  ADD UNIQUE KEY `location_UNIQUE` (`location`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `farmer_data`
--
ALTER TABLE `farmer_data`
  MODIFY `idfarmer_data` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `food`
--
ALTER TABLE `food`
  MODIFY `idfood` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `kind`
--
ALTER TABLE `kind`
  MODIFY `idkind` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `location`
--
ALTER TABLE `location`
  MODIFY `idlocation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `farmer_data`
--
ALTER TABLE `farmer_data`
  ADD CONSTRAINT `fk_farmer_data_food1` FOREIGN KEY (`food_idfood`) REFERENCES `food` (`idfood`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_farmer_data_kind1` FOREIGN KEY (`kind_idkind`) REFERENCES `kind` (`idkind`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_farmer_data_location` FOREIGN KEY (`location_idlocation`) REFERENCES `location` (`idlocation`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
