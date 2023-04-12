@extends('layouts.admin.school')

@section('TITLE','Class List')
@section('header')
    <nav class="container mt-3">
        <ol class="list-reset py-4 pl-4 rounded flex bg-grey-light text-grey">
            <li class="px-2"><a href="{{route('school.dashboard')}}" class="no-underline text-white hover:text-gray-600">Dashboard</a></li>
            <li>/</li>
            <li class="px-2">Classes</li>
        </ol>
    </nav>
@endsection

@section('content')


    <div class="flex flex-wrap mt-4">
        <div class="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div class="rounded-t mb-0 px-4 py-3 border-0">
                    <div class="flex flex-wrap items-center">
                        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 class="font-semibold text-base text-gray-800">Classes</h3>
                        </div>
                        
                    </div>
                </div>
                <div class="flex-auto px-4 bg-gray-100 lg:px-10 py-10 pt-0">
                    <table class="items-center w-full bg-transparent border-collapse" id="dataTable">
                        <thead>
                        <tr>
                            <th class="px-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">#</th>
                            <th class="px-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">Name</th>
                            <th class="px-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200">Created At</th>
                            <th class="px-3 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200"></th>
                        </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>


@endsection

@section('style')
    <link rel="stylesheet" href="//cdn.datatables.net/1.10.7/css/jquery.dataTables.min.css">
    <!--Regular Datatables CSS-->
    <link href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css" rel="stylesheet">
    <!--Responsive Extension Datatables CSS-->
    <link href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.dataTables.min.css" rel="stylesheet">
    <!--Button Extension Datatables CSS-->
    <link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.6.4/css/buttons.dataTables.min.css">
    <link rel="stylesheet" href="{{asset('css/datatable.css')}}">
@endsection

@section('script')
    <!-- jQuery -->
    <script src="//code.jquery.com/jquery.js"></script>
    <!-- DataTables -->
    <script src="//cdn.datatables.net/1.10.7/js/jquery.dataTables.min.js"></script>
    <script>
        $('#dataTable').DataTable({
            processing: true,
            serverSide: true,
            ajax: '{{route('school.class.index',['datatable'=>true])}}',
            columns: [
                { data: 'DT_RowIndex', name: 'DT_RowIndex' , orderable: false, searchable: false },
                { data: 'name', name: 'name' },
                { data: 'created_at', name: 'created_at' },
                {data: 'action', name: 'action', orderable: false, searchable: false, render:function (data,type,full,meta) {
                        console.log(full.id)
                        let id = full.id;
                        return ' <a href="{{route('school.class.index')}}/'+id+'" class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" ><i class="fa fa-eye"></i> View</a>';
                    }}
            ]
        });
    </script>
@endsection
