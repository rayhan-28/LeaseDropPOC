import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { searchPlugin } from '@react-pdf-viewer/search';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { pdfjs } from 'react-pdf';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/search/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';


const HighlightKeywordsExample = ({ fileUrl, pageNumber, content }) => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

    const searchPluginInstance = searchPlugin();
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        sidebarTabs: (defaultTabs) => [],
    });
    const pageNavigationPluginInstance = pageNavigationPlugin();

    const { highlight,setTargetPages,clearHighlights } = searchPluginInstance;
    const {jumpToPage} = pageNavigationPluginInstance;

    const navigateAndHighlight = React.useCallback((pageNumber, keyword) => {
        clearHighlights();
        if (highlight && keyword.trim() !== '') {
            // clear all highlights
            

            setTimeout(() => {
                setTargetPages((targetPage) => targetPage.pageIndex === pageNumber-1);
                highlight({
                    keyword,
                    matchCase: false,
                    wholeWords: false,
                });
                jumpToPage(pageNumber-1);

            }, 600); 
        }else{
            setTimeout(() => {
                jumpToPage(pageNumber-1);

            }, 300); // Adjust delay if necessary
        }
    }, [highlight]);

    React.useEffect(() => {
        navigateAndHighlight(pageNumber, content);
    }, [pageNumber, content]);

    return (
        <div
            style={{
                height: '95vh',
            }}
        >
            <Viewer fileUrl={fileUrl} plugins={[searchPluginInstance,defaultLayoutPluginInstance,pageNavigationPluginInstance]} />
        </div>
    );
};

export default HighlightKeywordsExample;