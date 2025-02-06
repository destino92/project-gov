import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
  
import React from 'react';

interface PagePaginationProps {
    totalPages: number;
    currentPage: number;
}

export default function PagePagination({ totalPages, currentPage }: PagePaginationProps) {
    const renderPageNumbers = () => {
        const pages = [];
        const ellipsis = <PaginationItem key="ellipsis"><PaginationEllipsis /></PaginationItem>;

        for (let i = 1; i <= totalPages; i++) {
            if (totalPages > 10) {
                if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
                    pages.push(
                        <PaginationItem key={i}>
                            <PaginationLink href="#" isActive={i === currentPage}>{i}</PaginationLink>
                        </PaginationItem>
                    );
                } else if (i === 2 || i === totalPages - 1) {
                    pages.push(ellipsis);
                }
            } else {
                pages.push(
                    <PaginationItem key={i}>
                        <PaginationLink href="#" isActive={i === currentPage}>{i}</PaginationLink>
                    </PaginationItem>
                );
            }
        }

        return pages;
    };

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" />
                </PaginationItem>
                {renderPageNumbers()}
                <PaginationItem>
                    <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
  