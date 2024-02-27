'use client'
import React from "react";
import colors from "@/data/colors";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Spinner, Button, Avatar} from "@nextui-org/react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import users from "@/data/users";
// import {useAsyncList} from "@react-stately/data";
import {User} from "@nextui-org/react";

export default function UserTable() {
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(true);

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "avatar":
        return (
        //   <User
        //     avatarProps={{radius: "lg", src: user.avatar}}
        //     description={user.email}
        //     name={cellValue}
        //   >
        //     {user.email}
        //   </User>
        
        <Image class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={user.avatar} alt="" />
        );
      
      default:
        return cellValue;
    }
  }, []);
//   let list = useAsyncList({
//     async load({signal, cursor}) {
//       if (cursor) {
//         setPage((prev) => prev + 1);
//       }

//       // If no cursor is available, then we're loading the first page.
//       // Otherwise, the cursor is the next URL to load, as returned from the previous page.
//       const res = await fetch(cursor || "https://swapi.py4e.com/api/people/?search=", {signal});
//       let json = await res.json();

//       if (!cursor) {
//         setIsLoading(false);
//       }

//       return {
//         items: json.results,
//         cursor: json.next,
//       };
//     },
//   });

  const hasMore = page < 9;

  return (
    <div className="container mx-auto px-4">

    


    <Card className="py-4 rounded-sm" isHoverable radius="sm" shadow="sm"> 
      <CardHeader className="pb-0 bg-slate-400 pt-2 px-4 flex-col items-start">
        <h2> Users from static data </h2>
      </CardHeader>
      <CardBody className="overflow-visible py-2 bg-slate-700">
      <Table
      isHeaderSticky
      aria-label="Example table with client side sorting"
    //   bottomContent={
    //     hasMore && !isLoading ? (
    //       <div className="flex w-full justify-center">
    //         <Button isDisabled={list.isLoading} variant="flat" onPress={list.loadMore}>
    //           {colors.isLoading && <Spinner color="white" size="sm" />}
    //           Load More
    //         </Button>
    //       </div>
    //     ) : null
    //   }
      classNames={{
        base: "max-h-[520px] overflow-scroll",
        table: "min-h-[420px]",
      }}
    >
      <TableHeader>
        <TableColumn key="id">ID</TableColumn>
        <TableColumn key="avatar">Profile</TableColumn>
        <TableColumn key="email">Email</TableColumn>
        <TableColumn key="first_name">First Name</TableColumn>
        <TableColumn key="last_name">First Name</TableColumn>

      </TableHeader>
      <TableBody
        // isLoading={isLoading}
        items={users}
        // loadingContent={<Spinner label="Loading..." />}
      >
       {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
      </CardBody>
    </Card>




    <Card className="py-4 rounded-sm" isHoverable radius="sm" shadow="sm"> 
      <CardHeader className="pb-0 bg-slate-400 pt-2 px-4 flex-col items-start">
        <h2> Colors from static data </h2>
      </CardHeader>
      <CardBody className="overflow-visible py-2 bg-slate-700">
      <Table
      isHeaderSticky
      aria-label="Example table with client side sorting"
      bottomContent={
        hasMore && !isLoading ? (
          <div className="flex w-full justify-center">
            <Button isDisabled={list.isLoading} variant="flat" onPress={list.loadMore}>
              {colors.isLoading && <Spinner color="white" size="sm" />}
              Load More
            </Button>
          </div>
        ) : null
      }
      classNames={{
        base: "max-h-[520px] overflow-scroll",
        table: "min-h-[420px]",
      }}
    >
      <TableHeader>
        <TableColumn key="color">Color</TableColumn>
        <TableColumn key="value">Value</TableColumn>
        
      </TableHeader>
      <TableBody
        // isLoading={isLoading}
        items={colors}
        // loadingContent={<Spinner label="Loading..." />}
      >
        {(item) => (
          <TableRow key={item.color}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
      </CardBody>
    </Card>



  </div>
    
  );
}
