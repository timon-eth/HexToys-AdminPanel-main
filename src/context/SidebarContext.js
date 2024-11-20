import React, { useState, createContext, useRef } from 'react';

// create context
export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const resultsPerPage = 20;
  const [limitData, setLimitData] = useState(20);
  const [isBulkDrawerOpen, setIsBulkDrawerOpen] = useState(false);
  const [lang, setLang] = useState('');
  const [time, setTime] = useState('');
  const [sortedField, setSortedField] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState(null);
  const [zone, setZone] = useState('');
  const [status, setStatus] = useState('');
  const [source, setSource] = useState('');
  const searchRef = useRef('');

  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const closeDrawer = () => setIsDrawerOpen(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const closeModal = () => setIsModalOpen(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const closeBulkDrawer = () => setIsBulkDrawerOpen(false);
  const toggleBulkDrawer = () => setIsBulkDrawerOpen(!isBulkDrawerOpen);

  const handleChangePage = (p) => {
    setCurrentPage(p);
  };

  const handleSubmitForAll = (e) => {
    e.preventDefault();
    if (!searchRef.current.value) return setSearchText(null);
    setSearchText(searchRef.current.value);
  };

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        closeSidebar,
        isDrawerOpen,
        toggleDrawer,
        closeDrawer,
        setIsDrawerOpen,
        isModalOpen,
        toggleModal,
        closeModal,
        isUpdate,
        setIsUpdate,
        closeBulkDrawer,
        isBulkDrawerOpen,
        toggleBulkDrawer,
        lang,
        setLang,
        currentPage,
        setCurrentPage,
        handleChangePage,
        searchText,
        setSearchText,
        searchRef,
        handleSubmitForAll,
        status,
        setStatus,
        zone,
        setZone,
        time,
        setTime,
        sortedField,
        setSortedField,
        source,
        setSource,
        resultsPerPage,
        limitData,
        setLimitData,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
